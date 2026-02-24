import { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Get Your Quote - San Jose Maids',
  description: 'Get an instant, accurate quote for house cleaning services. Fast, easy, and no obligations. Serving San Jose & Silicon Valley.',
  openGraph: {
    title: 'Get Your Quote - San Jose Maids',
    description: 'Get an instant quote for your home cleaning service. Choose your cleaning type, customize your needs, and let San Jose Maids take care of the rest.',
    url: 'https://www.sanjosemaids.com/quote',
    siteName: 'San Jose Maids',
    images: [
      {
        url: '/ogs-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Get a Cleaning Quote',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Your Quote - San Jose Maids',
    description: 'Get an instant, accurate quote for house cleaning services. Fast, easy, and no obligations.',
    images: ['/ogs-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.sanjosemaids.com/quote',
  },
};

export default function QuotePage() {
  return (
    <main className="min-h-screen pt-32" style={{ background: 'rgba(26, 55, 85, 0.95)' }}>
      <QuoteForm />
    </main>
  );
}