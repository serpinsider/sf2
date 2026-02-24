import BaseHero from '../shared/BaseHero';

interface AirbnbCleaningHeroProps {
  location?: string;
}

export default function AirbnbCleaningHero({ location = "Near You" }: AirbnbCleaningHeroProps) {
  return (
    <BaseHero
      title="Airbnb Turnover Cleaning"
      description="Professional turnover cleaning for Airbnb hosts. Quick, thorough, and guest-ready."
      location={location}
      showWizard={false}
      quoteUrl="/services/airbnb/quote"
    />
  );
}
