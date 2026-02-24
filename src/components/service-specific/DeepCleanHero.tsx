import BaseHero from '../shared/BaseHero';

interface DeepCleanHeroProps {
  location?: string;
}

export default function DeepCleanHero({ location = "San Jose" }: DeepCleanHeroProps) {
  return (
    <BaseHero
      title="Deep Cleaning Services"
      description="Thorough deep cleaning for a complete home refresh. Perfect for seasonal cleaning or when your space needs intensive attention."
      location={location}
      showWizard={true}
    />
  );
}

