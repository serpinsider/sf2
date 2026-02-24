import { Metadata } from 'next';
import CarCleaningService from '@/components/CarCleaningService';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata: Metadata = {
  title: "Car Cleaning in San Jose - San Jose Maids",
  description: "Mobile car detailing and cleaning services in San Jose and Silicon Valley. Interior and exterior detailing, stain removal, and odor elimination. Professional mobile service.",
  openGraph: {
    title: "Car Cleaning in San Jose - San Jose Maids",
    description: "Professional car detailing with mobile service in San Jose and Silicon Valley. Interior deep cleaning, exterior wash & wax, and full detailing packages.",
    url: "https://www.sanjosemaids.com/services/car-cleaning",
    siteName: "San Jose Maids",
    images: [
      {
        url: "/ogs-image.jpg",
        width: 1200,
        height: 630,
        alt: "Car Cleaning Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Cleaning in San Jose - San Jose Maids",
    description: "Mobile car detailing in San Jose and Silicon Valley. Professional interior and exterior cleaning with convenient mobile service.",
    images: ["/ogs-image.jpg"],
  },
  alternates: {
    canonical: "https://www.sanjosemaids.com/services/car-cleaning",
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

export default function CarCleaningPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <ScrollToTop />
      <CarCleaningService />
    </main>
  );
}

