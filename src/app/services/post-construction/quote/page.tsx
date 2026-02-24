import { Metadata } from 'next';
import PostConstructionQuoteForm from '@/components/PostConstructionQuoteForm';

export const metadata: Metadata = {
  title: 'Post-Construction Cleaning Quote - San Jose Maids',
  description: 'Get a free quote for professional post-construction cleaning in San Jose. Debris removal, deep cleaning, and move-in ready preparation.',
  twitter: {
    card: 'summary_large_image',
    title: 'Post-Construction Cleaning Quote - San Jose Maids',
    description: 'Get a free quote for professional post-construction cleaning in San Jose.',
    images: ['/ogs-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.sanjosemaids.com/services/post-construction/quote',
  },
};

export default function PostConstructionQuotePage() {
  return (
    <main className="min-h-screen pt-32" style={{ background: 'rgba(30, 35, 40, 0.98)' }}>
      <PostConstructionQuoteForm />
    </main>
  );
}
