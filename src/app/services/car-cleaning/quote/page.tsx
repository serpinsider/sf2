import { Metadata } from 'next';
import CarCleaningQuoteForm from '@/components/CarCleaningQuoteForm';

export const metadata: Metadata = {
  title: 'Car Cleaning Quote - San Jose Maids',
  description: 'Get a free quote for professional mobile car detailing in San Jose. Interior and exterior cleaning, leather conditioning, and more.',
  twitter: {
    card: 'summary_large_image',
    title: 'Car Cleaning Quote - San Jose Maids',
    description: 'Get a free quote for professional mobile car detailing in San Jose.',
    images: ['/ogs-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.sanjosemaids.com/services/car-cleaning/quote',
  },
};

export default function CarCleaningQuotePage() {
  return (
    <main className="min-h-screen pt-32" style={{ background: 'rgba(30, 35, 40, 0.98)' }}>
      <CarCleaningQuoteForm />
    </main>
  );
}
