import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { formatDate, jobLocation, listJobs, pageMeta } from '@/src/jobs'
import bcmsJobs from '../../bcms-content/jobs.json'
import { bcms, bcmsStyle } from '../../src/bcms-content'

export const generateMetadata = (): Metadata => pageMeta('jobs')

export default function JobsPage() {
  const jobs = listJobs()

  return (
    <>
      <Header />
      <main className="jobs w-full">
        <h1 className="heading" data-bcms-field="jobs-heading" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsJobs, 'jobs-heading')}>{bcms(bcmsJobs, 'jobs-heading', 'Careers')}</h1>
        <p className="jobs-intro" data-bcms-field="jobs-intro" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsJobs, 'jobs-intro')}>{bcms(bcmsJobs, 'jobs-intro', 'Help us build headphones people never want to take off. Explore the open roles at Audira.')}</p>

        {jobs.length === 0 ? (
          <p className="jobs-empty radius" data-bcms-field="jobs-empty" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsJobs, 'jobs-empty')}>{bcms(bcmsJobs, 'jobs-empty', 'No open roles right now. Check back soon.')}</p>
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
                  <span className="btn radius" data-bcms-field="jobs-card-cta" data-bcms-kind="text">{bcms(bcmsJobs, 'jobs-card-cta', 'View role')}</span>
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
