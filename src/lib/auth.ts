import "server-only";
import { redirect } from "next/navigation";
import { supabaseServer } from "@/lib/supabase/server";
import type { Profile, Role } from "@/lib/types";

export async function getUser() {
  const supabase = await supabaseServer();
  const { data, error } = await supabase.auth.getUser();
  if (error) return null;
  return data.user ?? null;
}

export async function getProfile(): Promise<Profile | null> {
  const user = await getUser();
  if (!user) return null;

  const supabase = await supabaseServer();
  const { data } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .maybeSingle();

  return (data as Profile | null) ?? null;
}

export async function requireProfile() {
  const profile = await getProfile();
  if (!profile) redirect("/login");
  if (profile.account_status !== "active") {
    redirect("/login?error=account_disabled");
  }
  return profile;
}

export async function requireRole(role: Role) {
  const profile = await requireProfile();
  if (profile.role !== role) redirect("/");
  return profile;
}

export async function requireAdmin() {
  const profile = await requireProfile();
  if (profile.role !== "admin") redirect("/");
  return profile;
}

