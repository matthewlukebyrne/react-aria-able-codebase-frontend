import FeatureSection from '../components/FeatureSection';
import LandingSection from '../components/LandingSection';

const FrontPage = () => {
  return (
    <div data-testid='frontpagetest-id'>
      <LandingSection />
      <FeatureSection />
    </div>
  );
};

export default FrontPage;
