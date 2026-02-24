import BaseHero from '../shared/BaseHero';

interface PostConstructionHeroProps {
  location?: string;
}

export default function PostConstructionHero({ location = "Near You" }: PostConstructionHeroProps) {
  return (
    <BaseHero
      title="Post-Construction Cleaning"
      description="Construction cleanup, debris removal, and detailed cleaning after renovations."
      location={location}
      showWizard={false}
      quoteUrl="/services/post-construction/quote"
    />
  );
}
