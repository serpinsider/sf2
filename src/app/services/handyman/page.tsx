import { Metadata } from 'next';
import HandymanService from '@/components/HandymanService';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata: Metadata = {
  title: "Handyman Services in San Jose - San Jose Maids",
  description: "Handyman services in San Jose and Silicon Valley. Furniture assembly, TV mounting, home repairs, and maintenance. Licensed, insured, and reliable service.",
  openGraph: {
    title: "Handyman Services in San Jose - San Jose Maids",
    description: "Expert handyman services for home repairs, furniture assembly, and maintenance in San Jose and Silicon Valley. Same-day service available.",
    url: "https://www.sanjosemaids.com/services/handyman",
    siteName: "San Jose Maids",
    images: [
      {
        url: "/ogs-image.jpg",
        width: 1200,
        height: 630,
        alt: "Handyman Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Handyman Services in San Jose - San Jose Maids",
    description: "Handyman services for repairs, assembly, and maintenance in San Jose and Silicon Valley. Licensed and insured.",
    images: ["/ogs-image.jpg"],
  },
  alternates: {
    canonical: "https://www.sanjosemaids.com/services/handyman",
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

export default function HandymanPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <ScrollToTop />
      <HandymanService />
    </main>
  );
}


