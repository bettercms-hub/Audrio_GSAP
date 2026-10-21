import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { formatDate, getJob, jobLocation, listJobs } from '@/src/jobs'

// Every role is prerendered from the synced snapshot; a slug JobDiva no longer lists is a 404.
export const dynamicParams = false

export function generateStaticParams() {
  return listJobs().map((job) => ({ slug: job.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const job = getJob(params.slug)
  return job ? { title: `${job.title} - Careers - Audira` } : {}
}

export default function JobPage({ params }: { params: { slug: string } }) {
  const job = getJob(params.slug)
  if (!job) notFound()

  const meta = [jobLocation(job), job.jobType, job.department].filter(Boolean)
  const posted = formatDate(job.postedAt)

  return (
    <>
      <Header />
      <main className="jobs job-detail w-full">
        <a href="/jobs" className="job-back">← All roles</a>
        <h1 className="heading" data-bcms-field="title" data-bcms-kind="text">{job.title}</h1>
        {meta.length > 0 && <p className="job-meta">{meta.join(' · ')}</p>}
        {posted && <p className="job-meta">Posted {posted}</p>}

        {job.applyUrl && (
          <a href={job.applyUrl} className="btn radius job-apply" target="_blank" rel="noopener noreferrer" data-bcms-props="apply_url|url|href">
            Apply now
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
