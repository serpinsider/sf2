import { Metadata } from 'next';
import HandymanQuoteForm from '@/components/HandymanQuoteForm';

export const metadata: Metadata = {
  title: 'Handyman Services Quote - San Jose Maids',
  description: 'Get a free quote for professional handyman services in San Jose. Repairs, installations, and home improvement.',
  twitter: {
    card: 'summary_large_image',
    title: 'Handyman Services Quote - San Jose Maids',
    description: 'Get a free quote for professional handyman services in San Jose.',
    images: ['/ogs-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.sanjosemaids.com/services/handyman/quote',
  },
};

export default function HandymanQuotePage() {
  return (
    <main className="min-h-screen pt-32" style={{ background: 'rgba(30, 35, 40, 0.98)' }}>
      <HandymanQuoteForm />
    </main>
  );
}
