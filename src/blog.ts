import { collection, html, imageUrl, str } from "./cms";

export { entryAttrs, entryField, formatDate, pageEntryId, pageMeta } from "./cms";

/** One journal post, synced from Airtable into the BetterCMS "Blog posts" collection (slug blog-posts). */
export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  coverUrl?: string;
  coverAlt?: string;
  bodyHtml?: string;
  author?: string;
  publishedOn?: string;
};

/** Published posts, newest first. */
export function listPosts(): Post[] {
  return collection("blog-posts")
    .map((e) => ({
      id: e.id,
      slug: e.slug,
      title: str(e.data.title) ?? e.slug,
      excerpt: str(e.data.excerpt),
      coverUrl: imageUrl(e.data.cover),
      coverAlt: str((e.data.cover as { altText?: unknown } | null)?.altText),
      bodyHtml: html(e.data.body),
      author: str(e.data.author),
      publishedOn: str(e.data.published_on),
    }))
    .sort((a, b) => (b.publishedOn ?? "").localeCompare(a.publishedOn ?? ""));
}

export function getPost(slug: string): Post | undefined {
  return listPosts().find((p) => p.slug === slug);
}
