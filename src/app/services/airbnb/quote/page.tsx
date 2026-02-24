import { Metadata } from 'next';
import AirbnbQuoteForm from '@/components/AirbnbQuoteForm';

export const metadata: Metadata = {
  title: 'Airbnb Cleaning Quote - San Jose Maids',
  description: 'Get a free quote for professional Airbnb and vacation rental cleaning in San Jose. Fast turnovers, reliable service.',
  twitter: {
    card: 'summary_large_image',
    title: 'Airbnb Cleaning Quote - San Jose Maids',
    description: 'Get a free quote for professional Airbnb and vacation rental cleaning in San Jose.',
    images: ['/ogs-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.sanjosemaids.com/services/airbnb/quote',
  },
};

export default function AirbnbQuotePage() {
  return (
    <main className="min-h-screen pt-32" style={{ background: 'rgba(30, 35, 40, 0.98)' }}>
      <AirbnbQuoteForm />
    </main>
  );
}
