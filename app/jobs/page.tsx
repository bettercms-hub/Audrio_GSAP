import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { formatDate, jobLocation, listJobs } from '@/src/jobs'

export const metadata: Metadata = {
  title: 'Careers - Audira',
  description: 'Open roles at Audira. Help us build headphones people never want to take off.',
}

export default function JobsPage() {
  const jobs = listJobs()

  return (
    <>
      <Header />
      <main className="jobs w-full">
        <h1 className="heading">Careers</h1>
        <p className="jobs-intro">
          Help us build headphones people never want to take off. Explore the open roles at Audira.
        </p>

        {jobs.length === 0 ? (
          <p className="jobs-empty radius">No open roles right now. Check back soon.</p>
        ) : (
          <ul className="job-list">
            {jobs.map((job) => (
              <li key={job.slug}>
                <a href={`/jobs/${job.slug}`} className="job-card radius">
                  <div>
                    <h2 className="job-title">{job.title}</h2>
                    <p className="job-meta">
                      {[jobLocation(job), job.jobType, formatDate(job.postedAt)].filter(Boolean).join(' · ')}
                    </p>
                  </div>
                  <span className="btn radius">View role</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </>
  )
}
