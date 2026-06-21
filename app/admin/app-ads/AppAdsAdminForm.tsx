"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { AppAdsConfig } from "@/app/lib/appAds/types";

export const AppAdsAdminForm = () => {
  const [adminSecret, setAdminSecret] = useState("");
  const [content, setContent] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const loadConfig = async () => {
    setIsLoading(true);
    setErrorMessage("");
    setStatusMessage("");

    try {
      const response = await fetch("/api/admin/app-ads", {
        headers: {
          Authorization: `Bearer ${adminSecret}`,
        },
      });

      if (!response.ok) {
        throw new Error("Invalid admin secret or server error.");
      }

      const config = (await response.json()) as AppAdsConfig;

      setContent(config.content);
      setIsVisible(config.isVisible);
      setUpdatedAt(config.updatedAt);
      setStatusMessage("Configuration loaded.");
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to load configuration.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const saveConfig = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    setStatusMessage("");

    try {
      const response = await fetch("/api/admin/app-ads", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${adminSecret}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
          isVisible,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save configuration.");
      }

      const config = (await response.json()) as AppAdsConfig;

      setUpdatedAt(config.updatedAt);
      setStatusMessage(
        isVisible
          ? "Saved. /app-ads.txt is now visible."
          : "Saved. /app-ads.txt is hidden (404).",
      );
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to save configuration.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-base-100 px-6 py-16">
      <div className="container mx-auto max-w-3xl rounded-custom border border-primary/10 bg-white p-8 shadow-sm laptop:p-10">
        <div className="flex flex-col gap-3 laptop:flex-row laptop:items-center laptop:justify-between">
          <div>
            <h1 className="font-display text-3xl font-bold text-primary">
              app-ads.txt Admin
            </h1>
            <p className="mt-2 text-sm text-gray-50">
              Upload plain-text app-ads content and control public visibility.
            </p>
          </div>
          <Link
            href="/"
            className="text-sm font-bold text-secondary transition-colors hover:text-accent-red"
          >
            Back to site
          </Link>
        </div>

        <form className="mt-8 space-y-6" onSubmit={saveConfig}>
          <label className="block">
            <span className="text-sm font-semibold text-primary">Admin secret</span>
            <input
              type="password"
              value={adminSecret}
              onChange={(event) => setAdminSecret(event.target.value)}
              className="mt-2 w-full rounded-custom border border-primary/15 px-4 py-3 text-primary outline-none focus:border-accent-blue"
              placeholder="APP_ADS_ADMIN_SECRET"
              autoComplete="current-password"
            />
          </label>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={loadConfig}
              disabled={isLoading || !adminSecret}
              className="rounded-custom border border-primary/15 px-5 py-2.5 text-sm font-bold text-primary transition-colors hover:border-accent-blue disabled:cursor-not-allowed disabled:opacity-50"
            >
              Load current
            </button>
          </div>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={isVisible}
              onChange={(event) => setIsVisible(event.target.checked)}
              className="h-4 w-4 accent-secondary"
            />
            <span className="text-sm font-medium text-primary">
              Make /app-ads.txt publicly visible
            </span>
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-primary">
              app-ads.txt content
            </span>
            <textarea
              value={content}
              onChange={(event) => setContent(event.target.value)}
              rows={14}
              className="mt-2 w-full rounded-custom border border-primary/15 px-4 py-3 font-mono text-sm text-primary outline-none focus:border-accent-blue"
              placeholder="Paste IAB app-ads.txt lines here..."
            />
          </label>

          <button
            type="submit"
            disabled={isLoading || !adminSecret}
            className="rounded-custom bg-secondary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-accent-red disabled:cursor-not-allowed disabled:opacity-50"
          >
            Save configuration
          </button>
        </form>

        {updatedAt && (
          <p className="mt-6 text-xs text-gray-50/80">
            Last updated: {new Date(updatedAt).toLocaleString()}
          </p>
        )}

        {statusMessage && (
          <p className="mt-4 text-sm font-medium text-primary">{statusMessage}</p>
        )}

        {errorMessage && (
          <p className="mt-4 text-sm font-medium text-accent-red">{errorMessage}</p>
        )}

        <p className="mt-8 text-xs leading-relaxed text-gray-50/70">
          Default state: hidden and empty. When hidden,{" "}
          <code className="rounded bg-base-100 px-1 py-0.5">/app-ads.txt</code> returns
          404. Set{" "}
          <code className="rounded bg-base-100 px-1 py-0.5">
            APP_ADS_ADMIN_SECRET
          </code>{" "}
          in your environment before using this page.
        </p>
      </div>
    </main>
  );
};
