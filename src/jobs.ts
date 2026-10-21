import { readFileSync } from "fs";
import path from "path";

/** One open role, synced from JobDiva into the BetterCMS "jobs" collection. */
export type Job = {
  slug: string;
  title: string;
  jobType?: string;
  department?: string;
  city?: string;
  state?: string;
  postedAt?: string;
  descriptionHtml?: string;
  applyUrl?: string;
};

type Entry = { slug: string; data: Record<string, unknown> };

const str = (v: unknown) => (typeof v === "string" && v.trim() ? v.trim() : undefined);
const html = (v: unknown) => str(v) ?? str((v as { html?: unknown } | null)?.html);
const href = (v: unknown) => str(v) ?? str((v as { href?: unknown } | null)?.href);

// ponytail: reads the whole snapshot per call; fine for a few hundred roles at build time
function entries(): Entry[] {
  // Written by `bettercms pull-content` at the start of every build: a missing file is a broken build, not "no jobs".
  const snapshot = JSON.parse(readFileSync(path.join(process.cwd(), "bcms-content.json"), "utf8"));
  return snapshot.collections?.jobs ?? [];
}

/** Published roles shown on the site, newest first. */
export function listJobs(): Job[] {
  return entries()
    .filter((e) => e.data.show_on_site !== false)
    .map((e) => ({
      slug: e.slug,
      title: str(e.data.title) ?? e.slug,
      jobType: str(e.data.job_type),
      department: str(e.data.department),
      city: str(e.data.city),
      state: str(e.data.state),
      postedAt: str(e.data.posted_at),
      descriptionHtml: html(e.data.description),
      applyUrl: href(e.data.apply_url),
    }))
    .sort((a, b) => (b.postedAt ?? "").localeCompare(a.postedAt ?? ""));
}

export function getJob(slug: string): Job | undefined {
  return listJobs().find((j) => j.slug === slug);
}

export const jobLocation = (j: Job) => [j.city, j.state].filter(Boolean).join(", ");

export const formatDate = (iso?: string) =>
  iso ? new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }) : undefined;
