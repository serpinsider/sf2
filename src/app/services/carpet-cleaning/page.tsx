import { Metadata } from 'next';
import CarpetCleaningService from '@/components/CarpetCleaningService';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata: Metadata = {
  title: "Carpet Cleaning in San Jose - San Jose Maids",
  description: "Expert carpet and upholstery cleaning in San Jose and Silicon Valley. Deep steam cleaning, pet stain removal, odor elimination, and carpet protection. Same-day service available.",
  openGraph: {
    title: "Carpet Cleaning in San Jose - San Jose Maids",
    description: "Carpet cleaning with deep steam cleaning, stain removal, and odor elimination. Serving San Jose, Santa Clara County & Silicon Valley.",
    url: "https://www.sanjosemaids.com/services/carpet-cleaning",
    siteName: "San Jose Maids",
    images: [
      {
        url: "/ogs-image.jpg",
        width: 1200,
        height: 630,
        alt: "Carpet Cleaning Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carpet Cleaning in San Jose - San Jose Maids",
    description: "Expert carpet cleaning with steam cleaning, stain removal, and odor elimination. Same-day service in San Jose and Silicon Valley.",
    images: ["/ogs-image.jpg"],
  },
  alternates: {
    canonical: "https://www.sanjosemaids.com/services/carpet-cleaning",
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

export default function CarpetCleaningPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <ScrollToTop />
      <CarpetCleaningService />
    </main>
  );
}


