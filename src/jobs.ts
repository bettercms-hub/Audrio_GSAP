import { collection, href, html, str } from "./cms";

export { entryAttrs, entryField, formatDate, pageEntryId, pageMeta } from "./cms";

/** One open role, synced from JobDiva into the BetterCMS "Jobs" collection (slug job-openings). */
export type Job = {
  id: string;
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

/** Published roles shown on the site, newest first. */
export function listJobs(): Job[] {
  return collection("job-openings")
    .filter((e) => e.data.show_on_site !== false)
    .map((e) => ({
      id: e.id,
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
