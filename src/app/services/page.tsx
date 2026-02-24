import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cleaning Services - San Jose Maids',
  description: 'Professional cleaning services in San Jose & Silicon Valley. Deep cleaning, move-out cleaning, Airbnb cleaning, carpet cleaning, handyman services, and more.',
  openGraph: {
    title: 'Cleaning Services - San Jose Maids',
    description: 'Professional cleaning services in San Jose & Silicon Valley. Deep cleaning, move-out cleaning, Airbnb cleaning, carpet cleaning, and more.',
    url: 'https://www.sanjosemaids.com/services',
    siteName: 'San Jose Maids',
    images: [
      {
        url: '/ogs-image.jpg',
        width: 1200,
        height: 630,
        alt: 'San Jose Maids Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cleaning Services - San Jose Maids',
    description: 'Professional cleaning services in San Jose & Silicon Valley. Deep cleaning, move-out cleaning, Airbnb cleaning, and more.',
    images: ['/ogs-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.sanjosemaids.com/services',
  },
};

const services = [
  {
    name: 'Airbnb Cleaning',
    slug: 'airbnb',
    description: 'Fast turnover cleaning for vacation rentals',
    icon: '🏠',
  },
  {
    name: 'Carpet Cleaning',
    slug: 'carpet-cleaning',
    description: 'Deep steam cleaning for carpets and upholstery',
    icon: '🧹',
  },
  {
    name: 'Commercial Cleaning',
    slug: 'commercial',
    description: 'Office and commercial space cleaning',
    icon: '🏢',
  },
  {
    name: 'Post-Construction',
    slug: 'post-construction',
    description: 'Construction debris and dust removal',
    icon: '🔨',
  },
  {
    name: 'Handyman Services',
    slug: 'handyman',
    description: 'Furniture assembly, repairs, and maintenance',
    icon: '🔧',
  },
  {
    name: 'Car Cleaning',
    slug: 'car-cleaning',
    description: 'Mobile car detailing and interior cleaning',
    icon: '🚗',
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--text-on-light)] mb-6">
            Our Services
          </h1>
          <p className="text-lg text-[var(--text-muted-light)] max-w-3xl mx-auto">
            Professional cleaning services in San Jose & Silicon Valley. 
            Licensed, insured, and trusted by thousands of customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-serif font-bold text-[var(--text-on-light)] mb-3 group-hover:text-[#dfbd69] transition-colors">
                {service.name}
              </h2>
              <p className="text-[var(--text-muted-light)] mb-4">
                {service.description}
              </p>
              <div className="flex items-center text-[#dfbd69] font-semibold">
                Learn More
                <svg 
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-[#283845] rounded-xl p-8 text-center">
          <h2 className="text-2xl font-serif font-bold text-white mb-4">
            Ready to Book?
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Get your instant quote in 60 seconds. No obligations, no hassle.
          </p>
          <Link
            href="/quote"
            className="inline-block bg-[#dfbd69] text-[#283845] px-8 py-3 rounded-lg font-semibold hover:bg-[#c9a959] transition-colors"
          >
            Get Your Quote
          </Link>
        </div>
      </div>
    </main>
  );
}







