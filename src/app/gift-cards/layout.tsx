import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gift Cards - San Jose Maids',
  description: 'Give the gift of a clean home. Purchase a San Jose Maids gift card.',
  openGraph: {
    title: 'Gift Cards - San Jose Maids',
    description: 'Give the gift of a clean home with San Jose Maids.',
    url: 'https://www.sanjosemaids.com/gift-cards',
    siteName: 'San Jose Maids',
    images: [{ url: '/ogs-image.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gift Cards - San Jose Maids',
    description: 'Give the gift of a clean home with San Jose Maids.',
    images: ['/ogs-image.jpg'],
  },
  alternates: { canonical: 'https://www.sanjosemaids.com/gift-cards' },
};

export default function GiftCardsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
