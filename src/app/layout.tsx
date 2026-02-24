import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
// import ErrorBoundary from "@/components/ErrorBoundary";
// import PostHogProvider from "@/components/PostHogProvider";

import ConditionalLayout from "@/components/ConditionalLayout";
import ScrollRestoration from "@/components/ScrollRestoration";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sanjosemaids.com'),
  title: {
    default: "San Jose Maids - House Cleaning & Maid Service in San Jose",
    template: "%s"
  },
  description: "Professional house cleaning services in San Jose and surrounding areas. Book online in 60 seconds. Trusted, bonded, and insured cleaners.",
  authors: [{ name: "San Jose Maids" }],
  creator: "San Jose Maids",
  publisher: "San Jose Maids",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sanjosemaids.com",
    title: "San Jose Maids - Professional House Cleaning Services",
    description: "Professional house cleaning and maid service in San Jose and surrounding areas.",
    siteName: "San Jose Maids",
    images: [
      {
        url: "/ogs-image.jpg",
        width: 1200,
        height: 630,
        alt: "San Jose Maids - House Cleaning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "San Jose Maids - House Cleaning & Maid Service in San Jose",
    description: "Professional house cleaning and maid service in San Jose and surrounding areas. Same-day service available.",
    creator: "@sanjosemaids",
    images: ["/ogs-image.jpg"],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning={true}>
      <head>
        {/* Modern browsers - ICO */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        {/* Fallback - ICO */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        {/* iOS/macOS */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        {/* Android/Chrome */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
      </head>
      <body
        className={`${inter.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {/* Fathom - beautiful, simple website analytics */}
        <Script 
          src="https://cdn.usefathom.com/script.js" 
          data-site="QJHZPKBB" 
          strategy="afterInteractive"
        />
            <ScrollRestoration />
        <StructuredData type="local-business" />
        <StructuredData type="organization" />
        <StructuredData type="website" />
        <ConditionalLayout>
          {children}
        </ConditionalLayout>

      </body>
    </html>
  );
}