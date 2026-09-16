"use client";

import { FormEvent, useState } from "react";

export default function AdminLoginPage() {
  const [error, setError] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(
      "The admin panel requires a backend, which isn't part of this frontend-only build.",
    );
  }

  return (
    <div className="min-h-screen bg-ocu-bg flex items-center justify-center px-6 pt-24">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
        <h1 className="text-2xl font-bold text-ocu-blue mb-1">Content Admin</h1>
        <p className="text-sm text-gray-500 mb-6">
          Sign in to manage CloudHight Consulting content.
        </p>
        <form onSubmit={onSubmit} className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
            <input
              type="email"
              required
              className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm"
            />
          </label>
          <label className="block text-sm font-medium text-gray-700">
            Password
            <input
              type="password"
              required
              className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm"
            />
          </label>
          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg p-3">
              {error}
            </p>
          )}
          <button className="w-full bg-ocu-blue text-white py-2.5 rounded-lg font-semibold">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
