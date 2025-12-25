"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { supabaseServer } from "@/lib/supabase/server";
import { supabaseAdmin } from "@/lib/supabase/admin";

const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(["student", "landlord"]),
  full_name: z.string().min(2).max(120),
});

export type AuthActionState = { error?: string; message?: string };

export async function signupAction(
  _prevState: AuthActionState,
  formData: FormData,
): Promise<AuthActionState> {
  const parsed = signupSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    role: formData.get("role"),
    full_name: formData.get("full_name"),
  });
  if (!parsed.success) return { error: "Please check your inputs." };

  const { email, password, role, full_name } = parsed.data;
  const supabase = await supabaseServer();

  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) return { error: error.message };
  const userId = data.user?.id;
  if (!userId) return { error: "Signup failed. Please try again." };

  // Create profile using service role so it works even when email confirmation is enabled.
  const admin = supabaseAdmin();
  const { error: profileError } = await admin.from("profiles").insert({
    id: userId,
    role,
    email,
    full_name,
    verification_status: role === "landlord" ? "pending" : null,
  });
  if (profileError) return { error: profileError.message };

  // If email confirmation is enabled, the user may not have a session yet.
  if (!data.session) {
    return {
      message:
        "Account created. Check your email to confirm your address, then log in.",
    };
  }

  redirect(role === "landlord" ? "/dashboard/landlord" : "/dashboard/student");
}

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export async function loginAction(
  _prevState: AuthActionState,
  formData: FormData,
): Promise<AuthActionState> {
  const parsed = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!parsed.success) return { error: "Invalid email or password." };

  const supabase = await supabaseServer();
  const { error } = await supabase.auth.signInWithPassword(parsed.data);
  if (error) return { error: "Invalid email or password." };

  // Route based on role.
  const { data: userData } = await supabase.auth.getUser();
  const userId = userData.user?.id;
  if (!userId) redirect("/");

  const { data: profile } = await supabase
    .from("profiles")
    .select("role,account_status")
    .eq("id", userId)
    .maybeSingle();

  if (!profile || profile.account_status !== "active") {
    return { error: "Account disabled. Contact support." };
  }

  if (profile.role === "admin") redirect("/admin");
  if (profile.role === "landlord") redirect("/dashboard/landlord");
  redirect("/dashboard/student");
}

export async function logoutAction() {
  const supabase = await supabaseServer();
  await supabase.auth.signOut();
  redirect("/");
}

