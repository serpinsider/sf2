import BaseHero from '../shared/BaseHero';

interface CarpetCleaningHeroProps {
  location?: string;
}

export default function CarpetCleaningHero({ location = "Near You" }: CarpetCleaningHeroProps) {
  return (
    <BaseHero
      title="Carpet Cleaning Services"
      description="Deep carpet cleaning, stain removal, and upholstery cleaning for homes and businesses."
      location={location}
      showWizard={false}
      quoteUrl="/services/carpet-cleaning/quote"
    />
  );
}
