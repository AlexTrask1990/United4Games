"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { AdsFilesAdminPanel } from "@/app/admin/AdsFilesAdminPanel";
import {
  clearAdminSecretFromSession,
  readAdminSecretFromSession,
  writeAdminSecretToSession,
} from "@/app/lib/admin/session";

type AuthState = "checking" | "login" | "authenticated";

export const AdminGate = () => {
  const [authState, setAuthState] = useState<AuthState>("checking");
  const [adminSecret, setAdminSecret] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const restoreSession = async () => {
      const storedSecret = readAdminSecretFromSession();

      if (!storedSecret) {
        setAuthState("login");
        return;
      }

      try {
        const response = await fetch("/api/admin/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password: storedSecret }),
        });

        if (!response.ok) {
          clearAdminSecretFromSession();
          setAuthState("login");
          return;
        }

        setAdminSecret(storedSecret);
        setAuthState("authenticated");
      } catch {
        clearAdminSecretFromSession();
        setAuthState("login");
      }
    };

    void restoreSession();
  }, []);

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const nextPassword = password.trim();

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password: nextPassword }),
      });

      if (!response.ok) {
        throw new Error("Wrong password.");
      }

      writeAdminSecretToSession(nextPassword);
      setAdminSecret(nextPassword);
      setPassword("");
      setAuthState("authenticated");
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to log in.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogout = () => {
    clearAdminSecretFromSession();
    setAdminSecret("");
    setAuthState("login");
  };

  return (
    <main className="min-h-screen bg-base-100 px-6 py-16">
      {authState === "checking" && (
        <div className="container mx-auto max-w-md rounded-custom border border-primary/10 bg-white p-8 text-center shadow-sm">
          <p className="text-sm text-gray-50">Checking session...</p>
        </div>
      )}

      {authState === "login" && (
        <div className="container mx-auto max-w-md rounded-custom border border-primary/10 bg-white p-8 shadow-sm laptop:p-10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="font-display text-3xl font-bold text-primary">
                Admin
              </h1>
              <p className="mt-2 text-sm text-gray-50">
                Enter password to continue.
              </p>
            </div>
            <Link
              href="/"
              className="text-sm font-bold text-secondary transition-colors hover:text-accent-red"
            >
              Site
            </Link>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <label className="block">
              <span className="text-sm font-semibold text-primary">Password</span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-2 w-full rounded-custom border border-primary/15 px-4 py-3 text-primary outline-none focus:border-accent-blue"
                placeholder="Password"
                autoComplete="current-password"
                autoFocus
              />
            </label>

            <button
              type="submit"
              disabled={isSubmitting || !password.trim()}
              className="w-full rounded-custom bg-secondary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-accent-red disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? "Checking..." : "Log in"}
            </button>
          </form>

          {errorMessage && (
            <p className="mt-4 text-sm font-medium text-accent-red">
              {errorMessage}
            </p>
          )}
        </div>
      )}

      {authState === "authenticated" && (
        <AdsFilesAdminPanel
          adminSecret={adminSecret}
          onLogout={handleLogout}
        />
      )}
    </main>
  );
};
