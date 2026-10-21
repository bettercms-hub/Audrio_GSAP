// ponytail: a stand-in for JobDiva's GET /api/authenticate until real API credentials exist.
// Delete app/api/mock-jobdiva and point the "jobdiva" integration back at api.jobdiva.com then.
import { MOCK_TOKEN } from '../../token'

export function GET(req: Request) {
  const q = new URL(req.url).searchParams
  if (!q.get('clientid') || !q.get('username') || !q.get('password')) {
    return new Response('Missing clientid, username or password', { status: 401 })
  }
  // JobDiva answers with the bare token as plain text.
  return new Response(MOCK_TOKEN, { headers: { 'content-type': 'text/plain' } })
}
