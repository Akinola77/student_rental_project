"use client";

import { supabaseBrowser } from "@/lib/supabase/browser";
import { Button } from "@/components/ui/button";

export function DocLink({ path }: { path: string }) {
  async function open() {
    const supabase = supabaseBrowser();
    const { data, error } = await supabase.storage
      .from("verification-docs")
      .createSignedUrl(path, 60);
    if (error) return alert(error.message);
    window.open(data.signedUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <Button type="button" size="sm" variant="secondary" onClick={open}>
      View
    </Button>
  );
}

