import { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import CallOrTextBar from '@/components/CallOrTextBar';
import QuoteBar from '@/components/QuoteBar';
import ServicesSection from '@/components/ServicesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import WhatWeCleanSection from '@/components/WhatWeCleanSection';
import AreasWeServeSection from '@/components/AreasWeServeSection';
import ReviewsSection from '@/components/ReviewsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'San Jose Maids - House Cleaning & Maid Service in San Jose',
  description: 'Professional house cleaning services in San Jose. Book online in 60 seconds. Trusted, bonded, and insured cleaners.',
  openGraph: {
    title: 'San Jose Maids - House Cleaning & Maid Service in San Jose',
    description: 'Professional house cleaning services in San Jose. Book online in 60 seconds.',
    url: 'https://www.sanjosemaids.com',
    siteName: 'San Jose Maids',
    images: [{ url: '/ogs-image.jpg', width: 1200, height: 630, alt: 'San Jose Maids - House Cleaning Services' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'San Jose Maids - House Cleaning & Maid Service in San Jose',
    description: 'Professional house cleaning services in San Jose. Book online in 60 seconds.',
    images: ['/ogs-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.sanjosemaids.com',
  },
};

export default function Home() {
  return (
    <main>
      <HeroSection location="San Jose" />
      <QuoteBar />
      <ServicesSection location="San Jose" />
      <CallOrTextBar />
      <WhatWeCleanSection />
      <QuoteBar />
      <HowItWorksSection />
      <CallOrTextBar />
      <AreasWeServeSection />
      <QuoteBar />
      <ReviewsSection location="San Jose" />
      <CallOrTextBar />
      <FAQSection location="San Jose" />
      <QuoteBar />
      <ContactSection />
    </main>
  );
}
