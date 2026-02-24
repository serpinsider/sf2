import { Metadata } from 'next';
import CommercialQuoteForm from '@/components/CommercialQuoteForm';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Quote - San Jose Maids',
  description: 'Get a free quote for professional commercial cleaning in San Jose. Office cleaning, retail spaces, and business facilities.',
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Cleaning Quote - San Jose Maids',
    description: 'Get a free quote for professional commercial cleaning in San Jose.',
    images: ['/ogs-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.sanjosemaids.com/services/commercial/quote',
  },
};

export default function CommercialQuotePage() {
  return (
    <main className="min-h-screen pt-32" style={{ background: 'rgba(30, 35, 40, 0.98)' }}>
      <CommercialQuoteForm />
    </main>
  );
}
