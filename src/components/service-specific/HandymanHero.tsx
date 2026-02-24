import BaseHero from '../shared/BaseHero';

interface HandymanHeroProps {
  location?: string;
}

export default function HandymanHero({ location = "Near You" }: HandymanHeroProps) {
  return (
    <BaseHero
      title="Handyman Services"
      description="Furniture assembly, TV mounting, repairs, and home improvement services."
      location={location}
      showWizard={false}
      quoteUrl="/services/handyman/quote"
    />
  );
}
