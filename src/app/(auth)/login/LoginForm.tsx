"use client";

import { useActionState } from "react";
import Link from "next/link";
import { loginAction, type AuthActionState } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert } from "@/components/ui/alert";

export function LoginForm() {
  const [state, action, pending] = useActionState<AuthActionState, FormData>(
    loginAction,
    {},
  );

  return (
    <form action={action} className="flex flex-col gap-3">
      {state.error ? <Alert variant="danger">{state.error}</Alert> : null}

      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-700">Email</label>
        <Input name="email" type="email" placeholder="you@university.ie" required />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-700">
          Password
        </label>
        <Input name="password" type="password" required />
      </div>

      <Button type="submit" disabled={pending}>
        {pending ? "Logging in..." : "Log in"}
      </Button>

      <div className="text-sm text-zinc-600">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-zinc-900 underline">
          Sign up
        </Link>
      </div>
    </form>
  );
}

