import { base44 } from '@/api/base44Client';

// Backend Stripe checkout RPC (mirrors the website function of the same name).
export async function createCheckoutSession(payload) {
  return base44.functions.invoke('createCheckoutSession', payload);
}

export default createCheckoutSession;
