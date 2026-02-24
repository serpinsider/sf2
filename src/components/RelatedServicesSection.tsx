import Link from 'next/link';
import { INLINE_STYLES } from '@/styles/colors';

const ALL_SERVICES = [
  { slug: 'deep-clean', name: 'Deep Cleaning', description: 'Thorough cleaning for a complete home refresh' },
  { slug: 'move-out', name: 'Move In/Out Cleaning', description: 'Get your full deposit back with inspection-ready results' },
  { slug: 'carpet-cleaning', name: 'Carpet Cleaning', description: 'Deep steam cleaning and stain removal' },
  { slug: 'commercial', name: 'Commercial Cleaning', description: 'Office and business cleaning on your schedule' },
  { slug: 'airbnb', name: 'Airbnb Turnover', description: 'Fast turnovers with guest-ready guarantee' },
  { slug: 'handyman', name: 'Handyman Services', description: 'Repairs, assembly, and home improvement' },
  { slug: 'post-construction', name: 'Post-Construction', description: 'Debris removal and construction cleanup' },
  { slug: 'car-cleaning', name: 'Car Detailing', description: 'Mobile interior and exterior car cleaning' },
];

const RELATED_MAP: Record<string, string[]> = {
  'deep-clean': ['move-out', 'carpet-cleaning', 'commercial', 'airbnb'],
  'move-out': ['deep-clean', 'carpet-cleaning', 'post-construction', 'handyman'],
  'carpet-cleaning': ['deep-clean', 'commercial', 'post-construction', 'airbnb'],
  'commercial': ['post-construction', 'carpet-cleaning', 'airbnb', 'deep-clean'],
  'airbnb': ['commercial', 'deep-clean', 'carpet-cleaning', 'handyman'],
  'handyman': ['post-construction', 'commercial', 'deep-clean', 'car-cleaning'],
  'post-construction': ['move-out', 'commercial', 'handyman', 'carpet-cleaning'],
  'car-cleaning': ['carpet-cleaning', 'handyman', 'deep-clean', 'commercial'],
};

interface RelatedServicesSectionProps {
  currentService: string;
}

export default function RelatedServicesSection({ currentService }: RelatedServicesSectionProps) {
  const relatedSlugs = RELATED_MAP[currentService] || [];
  const relatedServices = relatedSlugs
    .map(slug => ALL_SERVICES.find(s => s.slug === slug))
    .filter(Boolean);

  if (relatedServices.length === 0) return null;

  return (
    <section className="py-16" style={INLINE_STYLES.primary}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#dfbd69] mb-8 text-center">
          Related Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedServices.map((service) => (
            <Link
              key={service!.slug}
              href={`/services/${service!.slug}`}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-[#dfbd69]/30 transition-all group"
            >
              <h3 className="text-lg font-semibold text-white group-hover:text-[#dfbd69] transition-colors mb-2">
                {service!.name}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {service!.description}
              </p>
              <span className="inline-block mt-4 text-sm text-[#dfbd69] group-hover:translate-x-1 transition-transform">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
