import { Fragment, type ReactNode } from 'react'
import { entryField, formatDate, type Job } from '@/src/jobs'

const joined = (parts: ReactNode[], sep: string) => parts.map((part, i) => <Fragment key={i}>{i > 0 && sep}{part}</Fragment>)

/** "Austin, TX · Direct Placement · Oct 14, 2026", each value bound to its own field of the job. */
export default function JobMeta({ job, posted = true }: { job: Job; posted?: boolean }) {
  const location = [
    job.city && <span {...entryField(job.id, 'city')}>{job.city}</span>,
    job.state && <span {...entryField(job.id, 'state')}>{job.state}</span>,
  ].filter(Boolean)
  const parts = [
    location.length > 0 && <>{joined(location, ', ')}</>,
    job.jobType && <span {...entryField(job.id, 'job_type')}>{job.jobType}</span>,
    job.department && <span {...entryField(job.id, 'department')}>{job.department}</span>,
    posted && job.postedAt && <span {...entryField(job.id, 'posted_at', 'format')}>{formatDate(job.postedAt)}</span>,
  ].filter(Boolean)
  return parts.length > 0 ? <p className="job-meta">{joined(parts, ' · ')}</p> : null
}
