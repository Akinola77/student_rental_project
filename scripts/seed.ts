import { createClient } from "@supabase/supabase-js";

function required(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

async function main() {
  const url = required("NEXT_PUBLIC_SUPABASE_URL");
  const serviceKey = required("SUPABASE_SERVICE_ROLE_KEY");

  const supabase = createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const universities = [
    "Trinity College Dublin",
    "University College Dublin (UCD)",
    "Technological University Dublin (TU Dublin)",
    "Dublin City University (DCU)",
  ];

  // Seed universities
  for (const name of universities) {
    await supabase.from("universities").upsert({ name }, { onConflict: "name" });
  }

  const { data: uniRows, error: uniErr } = await supabase
    .from("universities")
    .select("id,name")
    .in("name", universities);
  if (uniErr) throw uniErr;

  const uniByName = new Map(uniRows.map((u) => [u.name, u.id] as const));

  // Create demo landlord + student
  const demoLandlordEmail = "landlord@demo.studentstay.ie";
  const demoStudentEmail = "student@demo.studentstay.ie";
  const demoPassword = "Password123!";

  const { data: landlordUser } = await supabase.auth.admin.createUser({
    email: demoLandlordEmail,
    password: demoPassword,
    email_confirm: true,
  });

  const { data: studentUser } = await supabase.auth.admin.createUser({
    email: demoStudentEmail,
    password: demoPassword,
    email_confirm: true,
  });

  const landlordId = landlordUser.user?.id;
  const studentId = studentUser.user?.id;
  if (!landlordId || !studentId) throw new Error("Failed to create demo users.");

  await supabase.from("profiles").upsert(
    {
      id: landlordId,
      role: "landlord",
      email: demoLandlordEmail,
      full_name: "Demo Landlord",
      verification_status: "approved",
      verified_at: new Date().toISOString(),
    },
    { onConflict: "id" },
  );

  await supabase.from("profiles").upsert(
    {
      id: studentId,
      role: "student",
      email: demoStudentEmail,
      full_name: "Demo Student",
      university_id: uniByName.get("Trinity College Dublin") ?? null,
      budget_max: 1200,
    },
    { onConflict: "id" },
  );

  const sampleListings = [
    {
      title: "Single room near Trinity (Dublin 2)",
      university: "Trinity College Dublin",
      rent: 1100,
      deposit: 1100,
      bills_included: false,
      room_type: "single_room",
      min_stay: "semester",
      available_from: "2026-01-15",
      address: "Dublin 2 (full address stored privately in admin/landlord only)",
      description:
        "Bright single room in a shared house. Close to city centre and public transport. Ideal for a student looking for a quiet place to study.",
      house_rules: "No smoking. No parties. Respect quiet hours after 10pm.",
    },
    {
      title: "Shared room option near UCD (Dublin 4)",
      university: "University College Dublin (UCD)",
      rent: 850,
      deposit: 850,
      bills_included: true,
      room_type: "shared_room",
      min_stay: "short_term",
      available_from: "2026-02-01",
      address: "Dublin 4 (private address)",
      description:
        "Shared room in a clean apartment. Bills included. Good bus connections to UCD.",
      house_rules: "No smoking. Guests by agreement.",
    },
    {
      title: "Entire 1-bed for TU Dublin student (Dublin 8)",
      university: "Technological University Dublin (TU Dublin)",
      rent: 1600,
      deposit: 1600,
      bills_included: false,
      room_type: "entire_property",
      min_stay: "academic_year",
      available_from: "2026-01-10",
      address: "Dublin 8 (private address)",
      description:
        "Compact 1-bedroom apartment. Suitable for a single student. Near LUAS and campus links.",
      house_rules: null,
    },
    {
      title: "Single room near DCU (Dublin 9)",
      university: "Dublin City University (DCU)",
      rent: 950,
      deposit: 950,
      bills_included: true,
      room_type: "single_room",
      min_stay: "semester",
      available_from: "2026-01-20",
      address: "Dublin 9 (private address)",
      description:
        "Single room in family home. Bills included. Walking distance to DCU.",
      house_rules: "No smoking. Quiet hours 11pm–7am.",
    },
    {
      title: "Student-friendly room in Dublin 6 (near multiple routes)",
      university: "University College Dublin (UCD)",
      rent: 1050,
      deposit: 1050,
      bills_included: false,
      room_type: "single_room",
      min_stay: "academic_year",
      available_from: "2026-02-15",
      address: "Dublin 6 (private address)",
      description:
        "Comfortable room with desk space. Easy commute to UCD and city centre.",
      house_rules: "No smoking. No loud music after 10pm.",
    },
  ];

  // Insert listings + private addresses
  for (const s of sampleListings) {
    const university_id = uniByName.get(s.university);
    if (!university_id) throw new Error(`Missing university id for ${s.university}`);

    const { data: listing, error } = await supabase
      .from("listings")
      .insert({
        landlord_id: landlordId,
        title: s.title,
        university_id,
        rent_monthly_eur: s.rent,
        deposit_eur: s.deposit,
        bills_included: s.bills_included,
        room_type: s.room_type,
        available_from: s.available_from,
        min_stay: s.min_stay,
        description: s.description,
        house_rules: s.house_rules,
        status: "active",
      })
      .select("id")
      .single();
    if (error) throw error;

    await supabase.from("listing_private").upsert({
      listing_id: listing.id,
      address: s.address,
    });
  }

  console.log("Seed complete.");
  console.log("Demo landlord:", demoLandlordEmail, demoPassword);
  console.log("Demo student:", demoStudentEmail, demoPassword);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

