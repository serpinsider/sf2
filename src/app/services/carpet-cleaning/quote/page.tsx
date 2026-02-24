import { Metadata } from 'next';
import CarpetQuoteForm from '@/components/CarpetQuoteForm';

export const metadata: Metadata = {
  title: 'Carpet Cleaning Quote - San Jose Maids',
  description: 'Get a free carpet cleaning quote. Professional steam cleaning, stain removal, and deep cleaning in San Jose.',
  twitter: {
    card: 'summary_large_image',
    title: 'Carpet Cleaning Quote - San Jose Maids',
    description: 'Get a free carpet cleaning quote. Professional steam cleaning and stain removal in San Jose.',
    images: ['/ogs-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.sanjosemaids.com/services/carpet-cleaning/quote',
  },
};

export default function CarpetQuotePage() {
  return (
    <main className="min-h-screen pt-32" style={{ background: 'rgba(30, 35, 40, 0.98)' }}>
      <CarpetQuoteForm />
    </main>
  );
}
