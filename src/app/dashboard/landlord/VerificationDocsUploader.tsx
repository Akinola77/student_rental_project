"use client";

import { useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Alert } from "@/components/ui/alert";

export function VerificationDocsUploader(props: {
  landlordId: string;
  existing: Array<{ id: string; doc_type: string; storage_path: string; created_at: string }>;
}) {
  const [docType, setDocType] = useState<"government_id" | "proof_of_ownership">(
    "government_id",
  );
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<{ error?: string; message?: string }>({});
  const [busy, setBusy] = useState(false);

  async function onUpload() {
    setStatus({});
    if (!file) return setStatus({ error: "Choose a file." });
    setBusy(true);
    try {
      const supabase = supabaseBrowser();
      const safeName = file.name.replaceAll(" ", "-");
      const path = `${props.landlordId}/${docType}-${Date.now()}-${safeName}`;

      const { error: upErr } = await supabase.storage
        .from("verification-docs")
        .upload(path, file, { upsert: false });
      if (upErr) throw upErr;

      const { error: dbErr } = await supabase.from("landlord_verification_docs").insert({
        landlord_id: props.landlordId,
        doc_type: docType,
        storage_path: path,
      });
      if (dbErr) throw dbErr;

      setStatus({ message: "Uploaded. Admin will review your verification." });
      setFile(null);
    } catch (e: unknown) {
      setStatus({ error: e instanceof Error ? e.message : "Upload failed." });
    } finally {
      setBusy(false);
    }
  }

  async function openDoc(path: string) {
    const supabase = supabaseBrowser();
    const { data, error } = await supabase.storage
      .from("verification-docs")
      .createSignedUrl(path, 60);
    if (error) return setStatus({ error: error.message });
    window.open(data.signedUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="flex flex-col gap-3">
      {status.error ? <Alert variant="danger">{status.error}</Alert> : null}
      {status.message ? <Alert variant="success">{status.message}</Alert> : null}

      <div className="grid gap-3 md:grid-cols-3">
        <div className="md:col-span-1">
          <label className="mb-1 block text-xs font-medium text-zinc-700">Document type</label>
          <Select
            value={docType}
            onChange={(e) => {
              const v = e.target.value;
              if (v === "government_id" || v === "proof_of_ownership") setDocType(v);
            }}
          >
            <option value="government_id">Government ID</option>
            <option value="proof_of_ownership">Proof of ownership / permission</option>
          </Select>
        </div>
        <div className="md:col-span-2">
          <label className="mb-1 block text-xs font-medium text-zinc-700">File</label>
          <input
            type="file"
            className="block w-full text-sm"
            accept=".pdf,image/*"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          />
          <div className="mt-1 text-xs text-zinc-500">PDF or image.</div>
        </div>
      </div>

      <Button type="button" onClick={onUpload} disabled={busy}>
        {busy ? "Uploading..." : "Upload verification document"}
      </Button>

      <div className="pt-2">
        <div className="text-sm font-medium">Uploaded documents</div>
        <div className="mt-2 flex flex-col gap-2">
          {props.existing.length ? (
            props.existing.map((d) => (
              <div
                key={d.id}
                className="flex items-center justify-between gap-3 rounded-lg border border-zinc-200 bg-white p-3 text-sm"
              >
                <div className="min-w-0">
                  <div className="font-medium">{d.doc_type.replaceAll("_", " ")}</div>
                  <div className="truncate text-xs text-zinc-500">{d.storage_path}</div>
                </div>
                <Button variant="secondary" size="sm" type="button" onClick={() => openDoc(d.storage_path)}>
                  View
                </Button>
              </div>
            ))
          ) : (
            <div className="text-sm text-zinc-600">No documents uploaded yet.</div>
          )}
        </div>
      </div>
    </div>
  );
}

