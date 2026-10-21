import { createDraftModeRoute } from '@bettercms-ai/next'

// The BetterCMS editor opens pages through here: it validates the preview token, turns on Next draft mode and redirects.
export const { GET } = createDraftModeRoute({ apiUrl: process.env.BCMS_API_URL ?? 'https://api.bettercms.ai' })
