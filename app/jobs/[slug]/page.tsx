import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { entryField, formatDate, getJob, listJobs, pageEntryId, pageMeta } from '@/src/jobs'
import JobMeta from '../JobMeta'
import bcmsJobs from '../../../bcms-content/jobs.json'
import { bcms } from '../../../src/bcms-content'

// Every role is prerendered from the synced snapshot; a slug JobDiva no longer lists is a 404.
export const dynamicParams = false

export function generateStaticParams() {
  return listJobs().map((job) => ({ slug: job.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const job = getJob(params.slug)
  // The title pattern is the 'Job role' template page's meta title in BetterCMS, e.g. "{{title}} - Careers - Audira".
  const pattern = pageMeta('job-role').title ?? '{{title}}'
  return job ? { title: pattern.replace('{{title}}', job.title) } : {}
}

export default function JobPage({ params }: { params: { slug: string } }) {
  const job = getJob(params.slug)
  if (!job) notFound()

  const posted = formatDate(job.postedAt)
  // The role pages' own labels live on the Careers page, so they are bound to its entry by absolute address.
  const careers = pageEntryId('jobs')

  return (
    <>
      <Header />
      <main className="jobs job-detail w-full">
        <a href="/jobs" className="job-back" {...entryField(careers, 'jobs-back-label')}>{bcms(bcmsJobs, 'jobs-back-label', '← All roles')}</a>
        <h1 className="heading" data-bcms-field="title" data-bcms-kind="text">{job.title}</h1>
        <JobMeta job={job} posted={false} />
        {posted && (
          <p className="job-meta">
            <span {...entryField(careers, 'jobs-posted-label')}>{bcms(bcmsJobs, 'jobs-posted-label', 'Posted')}</span>{' '}
            <span {...entryField(job.id, 'posted_at', 'format')}>{posted}</span>
          </p>
        )}

        {job.applyUrl && (
          <a href={job.applyUrl} className="btn radius job-apply" target="_blank" rel="noopener noreferrer" data-bcms-props="apply_url|url|href">
            <span {...entryField(careers, 'jobs-apply-label')}>{bcms(bcmsJobs, 'jobs-apply-label', 'Apply now')}</span>
          </a>
        )}

        {job.descriptionHtml && (
          <div className="job-body" data-bcms-field="description" data-bcms-kind="document" dangerouslySetInnerHTML={{ __html: job.descriptionHtml }} />
        )}
      </main>
      <Footer />
    </>
  )
}
