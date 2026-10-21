import { MOCK_TOKEN } from '../../../token'

// ponytail: sample open roles in JobDiva's v1 SearchJob shape (a bare array, space-separated keys),
// so the real BetterCMS sync runs end to end before real credentials exist.
const SAMPLE = '<p><em>Sample role for testing the JobDiva sync.</em></p>'

const JOBS = [
  {
    id: 91001,
    'reference #': 'SAMPLE-1001',
    'job title': 'Acoustic Engineer',
    city: 'Austin',
    state: 'TX',
    'job type': 'Direct Placement',
    'issue date': '2026-10-14T09:00:00',
    'job description': `${SAMPLE}<p>Tune the drivers behind every Audira headphone, from first prototype to final listening test.</p><p><strong>What you will do</strong></p><ul><li>Design and measure dynamic drivers and enclosures</li><li>Run listening panels and turn feedback into tuning targets</li><li>Work with industrial design on acoustic chambers</li></ul><p><strong>What you bring</strong></p><ul><li>5+ years in transducer or headphone acoustics</li><li>Hands-on with Klippel, APx or similar</li></ul>`,
  },
  {
    id: 91002,
    'reference #': 'SAMPLE-1002',
    'job title': 'Firmware Engineer, Bluetooth Audio',
    city: 'San Jose',
    state: 'CA',
    'job type': 'Contract',
    'issue date': '2026-10-10T09:00:00',
    'job description': `${SAMPLE}<p>Build the firmware that keeps Audira connected, low-latency and good for 40+ hours.</p><ul><li>Bluetooth LE Audio and A2DP stacks</li><li>Power management on embedded DSPs</li><li>3+ years of embedded C</li></ul>`,
  },
  {
    id: 91003,
    'reference #': 'SAMPLE-1003',
    'job title': 'Industrial Designer',
    city: 'Brooklyn',
    state: 'NY',
    'job type': 'Right to Hire',
    'issue date': '2026-10-06T09:00:00',
    'job description': `${SAMPLE}<p>Shape headphones people never want to take off: materials, comfort and the details you feel.</p><ul><li>Concept to production-ready CAD</li><li>Portfolio of shipped consumer products</li></ul>`,
  },
  {
    id: 91004,
    'reference #': 'SAMPLE-1004',
    'job title': 'Retail Experience Associate',
    city: 'Chicago',
    state: 'IL',
    'job type': 'Contract',
    'issue date': '2026-10-02T09:00:00',
    'job description': `${SAMPLE}<p>Help listeners find their sound in our flagship store.</p><ul><li>Guide demos across the Audira range</li><li>Weekend availability</li></ul>`,
  },
]

export function GET(req: Request) {
  if (req.headers.get('authorization') !== `Bearer ${MOCK_TOKEN}`) {
    return Response.json({ status: 401, message: 'Unauthorized' }, { status: 401 })
  }
  const q = new URL(req.url).searchParams
  const offset = Number(q.get('offset') ?? 0)
  const max = Number(q.get('maxReturned') ?? 30)
  return Response.json(JOBS.slice(offset, offset + max))
}
