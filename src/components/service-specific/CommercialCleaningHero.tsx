import BaseHero from '../shared/BaseHero';

interface CommercialCleaningHeroProps {
  location?: string;
}

export default function CommercialCleaningHero({ location = "Near You" }: CommercialCleaningHeroProps) {
  return (
    <BaseHero
      title="Commercial Cleaning Services"
      description="Office cleaning, janitorial services, and commercial maintenance for businesses of all sizes."
      location={location}
      showWizard={false}
      quoteUrl="/services/commercial/quote"
    />
  );
}
