import { Metadata } from 'next';
import MoveOutService from '@/components/MoveOutService';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata: Metadata = {
  title: "Move Out Cleaning Services in San Jose - San Jose Maids",
  description: "Professional move in/out cleaning services in San Jose and Silicon Valley. We ensure your property is spotless for the next occupants. Get your deposit back! Licensed team, same-day service available. Book online!",
  keywords: [
    'move out cleaning San Jose',
    'move in cleaning service',
    'moving cleaning San Jose',
    'end of lease cleaning',
    'move out cleaning near me',
    'apartment move out cleaning',
    'relocation cleaning service',
    'moving day cleaning Silicon Valley',
    'security deposit cleaning',
    'tenant turnover cleaning',
    'move in cleaning santa clara',
    'landlord cleaning service'
  ],
  openGraph: {
    title: "Move Out Cleaning Services in San Jose - San Jose Maids",
    description: "Professional move in/out cleaning services in San Jose and Silicon Valley. We ensure your property is spotless for the next occupants. Get your deposit back!",
    url: "https://www.sanjosemaids.com/services/move-out",
    siteName: "San Jose Maids",
    images: [
      {
        url: "/ogs-image.jpg",
        width: 1200,
        height: 630,
        alt: "Move Out Cleaning Services - San Jose Maids",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Move Out Cleaning Services in San Jose - San Jose Maids",
    description: "Professional move in/out cleaning services in San Jose and Silicon Valley. Get your deposit back with our thorough cleaning.",
    images: ["/ogs-image.jpg"],
  },
  alternates: {
    canonical: "https://www.sanjosemaids.com/services/move-out",
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

export default function MoveOutPage() {
  return (
    <>
      <MoveOutService />
      <ScrollToTop />
    </>
  );
}

