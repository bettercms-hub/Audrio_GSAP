import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { entryAttrs, entryField, formatDate, listPosts, pageMeta } from '@/src/blog'
import bcmsBlog from '../../bcms-content/blog.json'
import { bcms, bcmsStyle } from '../../src/bcms-content'
import { sectionsFor } from '@bettercms-ai/next'
import { BcmsSections, BcmsSection } from '@bettercms-ai/next/sections'

export const generateMetadata = (): Metadata => pageMeta('blog')

export default function BlogPage() {
  const posts = listPosts()

  return (
    <>
      <Header />
      <BcmsSections {...sectionsFor('blog')}>
      <BcmsSection bind="blog">{(root) => (
      <main className="blog w-full" {...root}>
        <h1 className="heading" data-bcms-field="blog-heading" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsBlog, 'blog-heading')}>{bcms(bcmsBlog, 'blog-heading', 'Journal')}</h1>
        <p className="blog-intro" data-bcms-field="blog-intro" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsBlog, 'blog-intro')}>{bcms(bcmsBlog, 'blog-intro', 'Stories on sound, design and the people behind Audira.')}</p>

        {posts.length === 0 ? (
          <p className="jobs-empty radius" data-bcms-field="blog-empty" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsBlog, 'blog-empty')}>{bcms(bcmsBlog, 'blog-empty', 'No posts yet. Check back soon.')}</p>
        ) : (
          <ul className="post-list">
            {posts.map((post) => (
              <li key={post.slug}>
                <a href={`/blog/${post.slug}`} className="post-card radius" {...entryAttrs(post.id)}>
                  {post.coverUrl && <img src={post.coverUrl} alt={post.coverAlt ?? post.title} className="post-cover radius" {...entryField(post.id, 'cover')} />}
                  <p className="job-meta">
                    {post.publishedOn && <span {...entryField(post.id, 'published_on', 'format')}>{formatDate(post.publishedOn)}</span>}
                    {post.publishedOn && post.author && ' · '}
                    {post.author && <span {...entryField(post.id, 'author')}>{post.author}</span>}
                  </p>
                  <h2 className="post-title" {...entryField(post.id, 'title')}>{post.title}</h2>
                  {post.excerpt && <p className="post-excerpt" {...entryField(post.id, 'excerpt')}>{post.excerpt}</p>}
                  <span className="post-more" data-bcms-field="blog-card-cta" data-bcms-kind="text">{bcms(bcmsBlog, 'blog-card-cta', 'Read post')}</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </main>
      )}</BcmsSection>
      </BcmsSections>
      <Footer />
    </>
  )
}
