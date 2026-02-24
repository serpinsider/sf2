import { Metadata } from 'next';
import DeepCleanService from '@/components/DeepCleanService';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata: Metadata = {
  title: "Deep Cleaning Services in San Jose - San Jose Maids",
  description: "Professional deep cleaning in San Jose and Silicon Valley. Tackle tough dirt, grime & buildup with our thorough process. Perfect for seasonal cleaning, heavily soiled homes, or when your space needs intensive attention. Same-day service, satisfaction guaranteed. Book online!",
  keywords: [
    'deep cleaning San Jose',
    'deep house cleaning service',
    'thorough cleaning San Jose',
    'spring cleaning Silicon Valley',
    'deep clean service San Jose',
    'detailed house cleaning',
    'intensive cleaning service',
    'deep cleaning near me',
    'deep cleaning services San Jose',
    'san jose deep cleaning',
    'heavily soiled home cleaning',
    'seasonal cleaning service'
  ],
  openGraph: {
    title: "Deep Cleaning Services in San Jose - San Jose Maids",
    description: "Professional deep cleaning in San Jose and Silicon Valley. Tackle tough dirt, grime & buildup with our thorough process. Same-day service, satisfaction guaranteed.",
    url: "https://www.sanjosemaids.com/services/deep-clean",
    siteName: "San Jose Maids",
    images: [
      {
        url: "/ogs-image.jpg",
        width: 1200,
        height: 630,
        alt: "Deep Cleaning Services - San Jose Maids",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep Cleaning Services in San Jose - San Jose Maids",
    description: "Professional deep cleaning services in San Jose and Silicon Valley. Thorough cleaning for a complete home refresh.",
    images: ["/ogs-image.jpg"],
  },
  alternates: {
    canonical: "https://www.sanjosemaids.com/services/deep-clean",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": 160,
    },
  },
};

export default function DeepCleanPage() {
  return (
    <>
      <DeepCleanService />
      <ScrollToTop />
    </>
  );
}

