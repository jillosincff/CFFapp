import { createClient } from '@base44/sdk';
import { appParams } from '@/lib/app-params';

const { appId, serverUrl, token, functionsVersion } = appParams;

// Shared Base44 client. The mobile shell connects to the same backend the
// website uses — credentials come from VITE_BASE44_APP_ID / VITE_BASE44_BACKEND_URL
// in `.env`, with optional URL overrides handled by `app-params`.
export const base44 = createClient({
  appId,
  serverUrl,
  token,
  functionsVersion,
  requiresAuth: false,
});
