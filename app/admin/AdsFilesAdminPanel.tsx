"use client";

import { FormEvent, useEffect, useState } from "react";
import {
  AdsFileConfig,
  AdsFileId,
  adsFileOptions,
  getAdsFileOption,
} from "@/app/lib/adsFiles/types";

const SAVE_LOCK_DURATION_MS = 3000;

const wait = (durationMs: number) => {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, durationMs);
  });
};

type AdsFilesAdminPanelProps = {
  adminSecret: string;
  onLogout: () => void;
};

export const AdsFilesAdminPanel = ({
  adminSecret,
  onLogout,
}: AdsFilesAdminPanelProps) => {
  const [selectedFileId, setSelectedFileId] = useState<AdsFileId>("ads");
  const [content, setContent] = useState("");
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const selectedFileOption = getAdsFileOption(selectedFileId);
  const isFormLocked = isLoading || isSaving;

  const loadConfig = async (fileId: AdsFileId = selectedFileId) => {
    setIsLoading(true);
    setErrorMessage("");
    setStatusMessage("");

    try {
      const response = await fetch(
        `/api/admin/ads-files?file=${encodeURIComponent(fileId)}`,
        {
          headers: {
            Authorization: `Bearer ${adminSecret}`,
          },
        },
      );

      if (!response.ok) {
        throw new Error("Failed to load file.");
      }

      const config = (await response.json()) as AdsFileConfig & {
        file: AdsFileId;
      };

      setContent(config.content);
      setUpdatedAt(config.updatedAt);
      setStatusMessage(`Loaded ${getAdsFileOption(fileId).label}.`);
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to load configuration.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void loadConfig(selectedFileId);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- reload when file or secret changes
  }, [selectedFileId, adminSecret]);

  const saveConfig = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isFormLocked) {
      return;
    }

    setIsSaving(true);
    setErrorMessage("");
    setStatusMessage("Saving...");

    const saveStartedAt = Date.now();

    try {
      const response = await fetch("/api/admin/ads-files", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${adminSecret}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          file: selectedFileId,
          content,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save configuration.");
      }

      const config = (await response.json()) as AdsFileConfig & {
        file: AdsFileId;
      };

      const elapsedMs = Date.now() - saveStartedAt;
      const remainingLockMs = Math.max(0, SAVE_LOCK_DURATION_MS - elapsedMs);

      if (remainingLockMs > 0) {
        await wait(remainingLockMs);
      }

      setUpdatedAt(config.updatedAt);
      setStatusMessage(`Saved ${selectedFileOption.publicPath}.`);
    } catch (error) {
      const elapsedMs = Date.now() - saveStartedAt;
      const remainingLockMs = Math.max(0, SAVE_LOCK_DURATION_MS - elapsedMs);

      if (remainingLockMs > 0) {
        await wait(remainingLockMs);
      }

      setStatusMessage("");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to save configuration.",
      );
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="container mx-auto max-w-3xl rounded-custom border border-primary/10 bg-white p-8 shadow-sm laptop:p-10">
      <div className="flex flex-col gap-3 laptop:flex-row laptop:items-center laptop:justify-between">
        <div>
          <h1 className="font-display text-3xl font-bold text-primary">
            Ads files Admin
          </h1>
          <p className="mt-2 text-sm text-gray-50">
            Choose a file, edit its text, and save.
          </p>
        </div>
        <button
          type="button"
          onClick={onLogout}
          disabled={isFormLocked}
          className="text-sm font-bold text-secondary transition-colors hover:text-accent-red disabled:cursor-not-allowed disabled:opacity-50"
        >
          Log out
        </button>
      </div>

      {isSaving && (
        <div
          className="mt-6 rounded-custom border border-accent-blue/30 bg-accent-blue/10 px-4 py-3 text-sm font-semibold text-primary"
          role="status"
          aria-live="polite"
        >
          Saving {selectedFileOption.label}... Please wait.
        </div>
      )}

      {!isSaving && statusMessage && (
        <div
          className="mt-6 rounded-custom border border-secondary/30 bg-secondary/10 px-4 py-3 text-sm font-semibold text-primary"
          role="status"
          aria-live="polite"
        >
          {statusMessage}
        </div>
      )}

      {errorMessage && (
        <div
          className="mt-6 rounded-custom border border-accent-red/30 bg-accent-red/10 px-4 py-3 text-sm font-semibold text-accent-red"
          role="alert"
        >
          {errorMessage}
        </div>
      )}

      <form className="mt-8 space-y-6" onSubmit={saveConfig}>
        <label className="block">
          <span className="text-sm font-semibold text-primary">File</span>
          <select
            value={selectedFileId}
            onChange={(event) =>
              setSelectedFileId(event.target.value as AdsFileId)
            }
            disabled={isFormLocked}
            className="mt-2 w-full rounded-custom border border-primary/15 bg-white px-4 py-3 text-primary outline-none focus:border-accent-blue disabled:cursor-not-allowed disabled:opacity-60"
          >
            {adsFileOptions.map((fileOption) => (
              <option key={fileOption.id} value={fileOption.id}>
                {fileOption.label} ({fileOption.publicPath})
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-primary">
            {selectedFileOption.label} content
          </span>
          <textarea
            value={content}
            onChange={(event) => setContent(event.target.value)}
            rows={14}
            disabled={isFormLocked}
            className="mt-2 w-full rounded-custom border border-primary/15 px-4 py-3 font-mono text-sm text-primary outline-none focus:border-accent-blue disabled:cursor-not-allowed disabled:opacity-60"
            placeholder={`Paste ${selectedFileOption.label} content here...`}
          />
        </label>

        <button
          type="submit"
          disabled={isFormLocked}
          className="rounded-custom bg-secondary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-accent-red disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSaving ? "Saving..." : isLoading ? "Loading..." : "Save"}
        </button>
      </form>

      {updatedAt && (
        <p className="mt-6 text-xs text-gray-50/80">
          Last updated: {new Date(updatedAt).toLocaleString()}
        </p>
      )}
    </div>
  );
};
