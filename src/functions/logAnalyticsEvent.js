import { base44 } from '@/api/base44Client';

// Backend analytics RPC (mirrors the website function of the same name).
// Resolves silently on failure so analytics never breaks the funnel.
export async function logAnalyticsEvent(payload) {
  try {
    return await base44.functions.invoke('logAnalyticsEvent', payload);
  } catch (e) {
    console.warn('[analytics] log failed:', e?.message);
    return null;
  }
}

export default logAnalyticsEvent;
