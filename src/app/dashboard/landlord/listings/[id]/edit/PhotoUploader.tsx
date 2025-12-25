"use client";

import { useMemo, useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { publicObjectUrl } from "@/lib/storage";
import { Button } from "@/components/ui/button";
import { Alert } from "@/components/ui/alert";

export function PhotoUploader(props: {
  listingId: string;
  existing: Array<{ id: string; storage_path: string; sort_order: number }>;
}) {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<{ error?: string; message?: string }>({});
  const [busy, setBusy] = useState(false);

  const nextOrder = useMemo(() => {
    const used = new Set(props.existing.map((p) => p.sort_order));
    for (let i = 1; i <= 6; i++) if (!used.has(i)) return i;
    return null;
  }, [props.existing]);

  async function upload() {
    setStatus({});
    if (!file) return setStatus({ error: "Choose a photo." });
    if (!nextOrder) return setStatus({ error: "Max 6 photos reached." });

    setBusy(true);
    try {
      const supabase = supabaseBrowser();
      const safeName = file.name.replaceAll(" ", "-");
      const path = `${props.listingId}/${Date.now()}-${safeName}`;

      const { error: upErr } = await supabase.storage
        .from("listing-photos")
        .upload(path, file, { upsert: false });
      if (upErr) throw upErr;

      const { error: dbErr } = await supabase.from("listing_photos").insert({
        listing_id: props.listingId,
        storage_path: path,
        sort_order: nextOrder,
      });
      if (dbErr) throw dbErr;

      setStatus({ message: "Uploaded. Refresh the page to see it in the list." });
      setFile(null);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Upload failed.";
      if (msg.includes("photo_limit_exceeded")) {
        setStatus({ error: "Max 6 photos reached for this listing." });
      } else {
        setStatus({ error: msg });
      }
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex flex-col gap-3">
      {status.error ? <Alert variant="danger">{status.error}</Alert> : null}
      {status.message ? <Alert variant="success">{status.message}</Alert> : null}

      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-700">Add photo</label>
        <input
          type="file"
          className="block w-full text-sm"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
        />
        <div className="mt-1 text-xs text-zinc-500">
          Max 6 photos. Suggested: bedroom, kitchen, bathroom, exterior, living room.
        </div>
      </div>

      <Button type="button" variant="secondary" onClick={upload} disabled={busy}>
        {busy ? "Uploading..." : `Upload photo${nextOrder ? ` (slot ${nextOrder}/6)` : ""}`}
      </Button>

      <div className="pt-2">
        <div className="text-sm font-medium">Current photos</div>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {props.existing.length ? (
            props.existing
              .slice()
              .sort((a, b) => a.sort_order - b.sort_order)
              .map((p) => (
                <div
                  key={p.id}
                  className="overflow-hidden rounded-lg border border-zinc-200 bg-white"
                >
                  <img
                    src={publicObjectUrl("listing-photos", p.storage_path)}
                    alt="Listing photo"
                    className="h-40 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="p-2 text-xs text-zinc-600">
                    Slot {p.sort_order} · {p.storage_path}
                  </div>
                </div>
              ))
          ) : (
            <div className="text-sm text-zinc-600">No photos yet.</div>
          )}
        </div>
      </div>
    </div>
  );
}

