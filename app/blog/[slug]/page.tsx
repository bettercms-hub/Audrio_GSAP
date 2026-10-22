import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { entryField, formatDate, getPost, listPosts, pageEntryId, pageMeta } from '@/src/blog'
import bcmsBlog from '../../../bcms-content/blog.json'
import { bcms } from '../../../src/bcms-content'

// Every post is prerendered from the synced snapshot; a slug Airtable no longer lists is a 404.
export const dynamicParams = false

export function generateStaticParams() {
  return listPosts().map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug)
  // "<post> - " followed by the Blog page's meta title in BetterCMS ("Journal - Audira").
  const blog = pageMeta('blog').title
  return post ? { title: blog ? `${post.title} - ${blog}` : post.title, description: post.excerpt } : {}
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) notFound()

  // The post pages' own labels live on the Blog page, so they are bound to its entry by absolute address.
  const blog = pageEntryId('blog')

  return (
    <>
      <Header />
      <main className="blog post-detail w-full">
        <a href="/blog" className="job-back" {...entryField(blog, 'blog-back-label')}>{bcms(bcmsBlog, 'blog-back-label', '← All posts')}</a>
        <h1 className="heading" {...entryField(post.id, 'title')}>{post.title}</h1>
        <p className="job-meta">
          {post.author && (
            <>
              <span {...entryField(blog, 'blog-by-label')}>{bcms(bcmsBlog, 'blog-by-label', 'By')}</span>{' '}
              <span {...entryField(post.id, 'author')}>{post.author}</span>
            </>
          )}
          {post.author && post.publishedOn && ' · '}
          {post.publishedOn && <span {...entryField(post.id, 'published_on', 'format')}>{formatDate(post.publishedOn)}</span>}
        </p>
        {post.coverUrl && <img src={post.coverUrl} alt={post.coverAlt ?? post.title} className="post-hero radius" {...entryField(post.id, 'cover')} />}
        {post.bodyHtml && <div className="job-body" {...entryField(post.id, 'body', 'format')} dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />}
      </main>
      <Footer />
    </>
  )
}
