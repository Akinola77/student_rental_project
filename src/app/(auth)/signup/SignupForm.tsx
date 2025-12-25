"use client";

import { useActionState } from "react";
import Link from "next/link";
import { signupAction, type AuthActionState } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Alert } from "@/components/ui/alert";

export function SignupForm() {
  const [state, action, pending] = useActionState<AuthActionState, FormData>(
    signupAction,
    {},
  );

  return (
    <form action={action} className="flex flex-col gap-3">
      {state.error ? <Alert variant="danger">{state.error}</Alert> : null}
      {state.message ? <Alert variant="success">{state.message}</Alert> : null}

      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-700">
          I am a
        </label>
        <Select name="role" defaultValue="student" required>
          <option value="student">Student</option>
          <option value="landlord">Landlord</option>
        </Select>
      </div>

      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-700">
          Full name
        </label>
        <Input name="full_name" placeholder="Your name" required />
      </div>

      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-700">Email</label>
        <Input name="email" type="email" placeholder="you@university.ie" required />
        <div className="mt-1 text-xs text-zinc-500">
          Use your email for enquiries and verification updates.
        </div>
      </div>

      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-700">
          Password
        </label>
        <Input name="password" type="password" minLength={8} required />
        <div className="mt-1 text-xs text-zinc-500">Minimum 8 characters.</div>
      </div>

      <Button type="submit" disabled={pending}>
        {pending ? "Creating account..." : "Create account"}
      </Button>

      <div className="text-sm text-zinc-600">
        Already have an account?{" "}
        <Link href="/login" className="text-zinc-900 underline">
          Log in
        </Link>
      </div>
    </form>
  );
}

