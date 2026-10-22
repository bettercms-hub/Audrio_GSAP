import { readFileSync } from "fs";
import path from "path";

/** One published entry of a BetterCMS collection, as `bettercms pull-content` writes it. */
export type Entry = { id: string; slug: string; data: Record<string, unknown> };

export const str = (v: unknown) => (typeof v === "string" && v.trim() ? v.trim() : undefined);
/** A rich text or document value's HTML (or a plain string). */
export const html = (v: unknown) => str(v) ?? str((v as { html?: unknown } | null)?.html);
/** A link value's href (or a plain string). */
export const href = (v: unknown) => str(v) ?? str((v as { href?: unknown } | null)?.href);
/** An image value's url (or a plain string). */
export const imageUrl = (v: unknown) => str(v) ?? str((v as { url?: unknown } | null)?.url);

// ponytail: reads the whole snapshot per call; fine for a few hundred entries at build time
function snapshot() {
  // Written by `bettercms pull-content` at the start of every build: a missing file is a broken build, not "no entries".
  return JSON.parse(readFileSync(path.join(process.cwd(), "bcms-content.json"), "utf8"));
}

/** The published entries of one collection, by its slug. */
export function collection(slug: string): Entry[] {
  return snapshot().collections?.[slug] ?? [];
}

/** A CMS page's native SEO fields, for Next's metadata. */
export function pageMeta(slug: string): { title?: string; description?: string } {
  const page = snapshot().pages?.find((p: { slug: string }) => p.slug === slug);
  return { title: str(page?.metaTitle), description: str(page?.metaDescription) };
}

/** The id of a CMS page's own entry (its field values), for binding page copy shown on another route. */
export function pageEntryId(slug: string): string | undefined {
  return snapshot().collections?.[slug]?.[0]?.id;
}

export const formatDate = (iso?: string) =>
  iso ? new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }) : undefined;

// ponytail: the same attributes as entryAttrs/entryField in @bettercms-ai/next 0.29; use those after upgrading.
/** Declares which collection entry an element (a card) shows. */
export const entryAttrs = (id?: string) => (id ? { "data-bcms-entry": id } : {});

/** Binds an element to one field of an entry; a formatted value (a date) is declared as derived, not editable in place. */
export function entryField(id: string | undefined, path: string, transform?: "format") {
  if (!id) return {};
  const address = `entry:${id}:${path}`;
  return transform ? { "data-bcms-entry-from": `${address}|${transform}` } : { "data-bcms-entry-field": address };
}
