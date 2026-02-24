// Service Configuration
// Minimal config to prevent build errors

export const ROOMS = [
  { id: 'living_room', name: 'Living Room' },
  { id: 'kitchen', name: 'Kitchen' },
  { id: 'dining_room', name: 'Dining Room' },
  { id: 'basement', name: 'Basement' },
  { id: 'garage', name: 'Garage' },
];

export const ACCESS_METHODS = [
  { id: 'home', name: 'I will be home' },
  { id: 'key', name: 'Leave key/code' },
  { id: 'lockbox', name: 'Lockbox' },
  { id: 'doorman', name: 'Doorman/Concierge' },
];

export async function getSalesTaxRate(location?: string): Promise<number> {
  try {
    // Get from centralized pricing API
    const { getPricing } = await import('../lib/pricing-client');
    const pricing = await getPricing('san_jose_maids');
    return pricing.salesTaxRate;
  } catch (error) {
    console.error('Error getting sales tax rate, using fallback:', error);
    // Fallback to old rate
  return 0.0827; // 8.27%
  }
}

export function getFrequencyDiscount(frequency: string): number {
  switch (frequency?.toLowerCase()) {
    case 'weekly':
      return 0.10; // 10% off
    case 'bi-weekly':
    case 'bi_weekly':
      return 0.05; // 5% off
    case 'monthly':
      return 0; // $10 flat discount handled elsewhere
    default:
      return 0;
  }
}

export function formatRoomsForHubSpot(rooms: string[]): string {
  return rooms.join(', ');
}

export function formatAccessMethodForHubSpot(method: string): string {
  const methodMap: Record<string, string> = {
    'home': 'I will be home',
    'key': 'Leave key/code',
    'lockbox': 'Lockbox',
    'doorman': 'Doorman/Concierge'
  };
  return methodMap[method] || method;
}

export function parseRoomsFromHubSpot(roomsString?: string): string[] {
  if (!roomsString) return [];
  return roomsString.split(', ').filter(Boolean);
}