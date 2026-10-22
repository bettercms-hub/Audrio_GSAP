// ponytail: a stand-in for Airtable's "list records" API (GET /v0/{baseId}/{table}) until a real base exists.
// Same response shape: { records: [{ id, createdTime, fields }], offset? }, empty fields omitted, Markdown long text,
// attachment arrays, pageSize/offset paging and a simple filterByFormula. Delete app/api/mock-airtable and point
// the "airtable" integration at api.airtable.com then.
const BASE_ID = 'appMockAudira0001'
const TABLE = 'Posts'
const SAMPLE = '*Sample post for testing the Airtable sync.*\n\n'

type Fields = Record<string, unknown>

function attachment(origin: string, id: string, file: string, width: number, height: number) {
  return [{ id, url: `${origin}/images/${file}`, filename: file, type: 'image/jpeg', width, height }]
}

function records(origin: string): { id: string; createdTime: string; fields: Fields }[] {
  return [
    {
      id: 'recAudiraPost0001',
      createdTime: '2026-10-14T09:00:00.000Z',
      fields: {
        Title: 'Inside the Audira Acoustic Lab',
        Excerpt: 'A walk through the room where every Audira driver is measured, tuned and argued over.',
        Body: `${SAMPLE}## Where sound gets measured\n\nEvery Audira headphone starts as a **driver on a test rig**. We measure frequency response, distortion and seal before anyone listens.\n\n## What we listen for\n\n- Bass that stays tight at high volume\n- Mids that keep voices natural\n- Highs that never turn harsh\n\nThen the listening panel takes over. [See our headphones](/).`,
        Cover: attachment(origin, 'attLab0001', 'img1.jpeg', 1152, 864),
        Author: 'Maya Chen',
        'Published on': '2026-10-14',
        Status: 'Published',
      },
    },
    {
      id: 'recAudiraPost0002',
      createdTime: '2026-10-07T09:00:00.000Z',
      fields: {
        Title: 'How We Tuned the Masterbeat Sound',
        Excerpt: 'Six months, forty prototypes and one stubborn bass note: the story behind Masterbeat.',
        Body: `${SAMPLE}## Forty prototypes\n\nMasterbeat went through **forty prototypes** before the sound felt right. Most changes were tiny: a vent here, a damping layer there.\n\n## The stubborn bass note\n\n1. We found a resonance at 120 Hz\n2. We moved the vent 2 mm\n3. The note disappeared\n\nSmall details make the difference.`,
        Cover: attachment(origin, 'attTune0002', 'img2.jpeg', 1152, 864),
        Author: 'Arjun Mehta',
        'Published on': '2026-10-07',
        Status: 'Published',
      },
    },
    {
      id: 'recAudiraPost0003',
      createdTime: '2026-09-30T09:00:00.000Z',
      fields: {
        Title: 'Five Ways to Make Your Headphones Last',
        Excerpt: 'Simple habits that keep your ear cushions soft, your battery healthy and your sound clear.',
        Body: `${SAMPLE}## Care that takes a minute\n\n1. **Wipe the cushions** after long sessions\n2. Charge before the battery is empty\n3. Store them in the case\n4. Keep the drivers away from heat\n5. Update the firmware\n\nYour headphones will thank you for years.`,
        Cover: attachment(origin, 'attCare0003', 'img4.jpg', 610, 560),
        Author: 'Sara Lopez',
        'Published on': '2026-09-30',
        Status: 'Published',
      },
    },
    {
      // A draft row: the sync's filterByFormula must leave it out.
      id: 'recAudiraPost0004',
      createdTime: '2026-10-16T09:00:00.000Z',
      fields: { Title: 'Coming Soon: Audira Studio', Excerpt: 'Not ready yet.', Author: 'Maya Chen', Status: 'Draft' },
    },
  ]
}

export function GET(req: Request, { params }: { params: { baseId: string; table: string } }) {
  const auth = req.headers.get('authorization') ?? ''
  if (!/^Bearer pat\S+$/.test(auth)) {
    return Response.json({ error: { type: 'AUTHENTICATION_REQUIRED', message: 'Authentication required' } }, { status: 401 })
  }
  if (params.baseId !== BASE_ID || decodeURIComponent(params.table) !== TABLE) {
    return Response.json({ error: 'NOT_FOUND' }, { status: 404 })
  }

  const url = new URL(req.url)
  let rows = records(url.origin)
  // Supports the one formula shape the sync sends: {Field}='value'.
  const formula = /^\{(.+)\}\s*=\s*'(.*)'$/.exec(url.searchParams.get('filterByFormula') ?? '')
  if (formula) rows = rows.filter((r) => r.fields[formula[1]] === formula[2])

  const pageSize = Math.min(Math.max(Number(url.searchParams.get('pageSize') ?? 100), 1), 100)
  const start = Number(url.searchParams.get('offset')?.replace(/^itr/, '') ?? 0)
  const page = rows.slice(start, start + pageSize)
  const next = start + pageSize < rows.length ? `itr${start + pageSize}` : undefined
  return Response.json({ records: page, ...(next ? { offset: next } : {}) })
}
