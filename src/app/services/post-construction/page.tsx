import { Metadata } from 'next';
import PostConstructionService from '@/components/PostConstructionService';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata: Metadata = {
  title: "Post-Construction Cleaning in San Jose - San Jose Maids",
  description: "Post-construction cleanup in San Jose and Silicon Valley. Construction debris removal, dust elimination, and move-in ready cleaning. Licensed & insured contractors.",
  openGraph: {
    title: "Post-Construction Cleaning in San Jose - San Jose Maids",
    description: "Expert post-construction cleanup services. We handle debris, dust, and final touches to make your space move-in ready.",
    url: "https://www.sanjosemaids.com/services/post-construction",
    siteName: "San Jose Maids",
    images: [
      {
        url: "/ogs-image.jpg",
        width: 1200,
        height: 630,
        alt: "Post-Construction Cleaning Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Post-Construction Cleaning in San Jose - San Jose Maids",
    description: "Post-construction cleanup services. Construction debris removal and move-in ready cleaning in San Jose and Silicon Valley.",
    images: ["/ogs-image.jpg"],
  },
  alternates: {
    canonical: "https://www.sanjosemaids.com/services/post-construction",
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

export default function PostConstructionPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <ScrollToTop />
      <PostConstructionService />
    </main>
  );
}


