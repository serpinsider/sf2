import BaseHero from '../shared/BaseHero';

interface MoveOutHeroProps {
  location?: string;
}

export default function MoveOutHero({ location = "San Jose" }: MoveOutHeroProps) {
  return (
    <BaseHero
      title="Move In/Out Cleaning Services"
      description="Professional move in/out cleaning for spotless properties. Get your deposit back with our thorough, inspection-ready service."
      location={location}
      showWizard={true}
    />
  );
}

