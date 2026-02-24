import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Join Our Team - San Jose Maids',
  description: 'Join the San Jose Maids team. We\'re hiring professional house cleaners in San Jose & Silicon Valley.',
  openGraph: {
    title: 'Join Our Team - San Jose Maids',
    description: 'We\'re hiring professional house cleaners in San Jose & Silicon Valley.',
    url: 'https://www.sanjosemaids.com/join-our-team',
    siteName: 'San Jose Maids',
    images: [{ url: '/ogs-image.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Join Our Team - San Jose Maids',
    description: 'We\'re hiring professional house cleaners in San Jose & Silicon Valley.',
    images: ['/ogs-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.sanjosemaids.com/join-our-team',
  },
};

export default function JoinOurTeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}







