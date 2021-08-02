import FAQSection from '../components/FAQSection';
import FeatureSection from '../components/FeatureSection';
import LandingSection from '../components/LandingSection';

// Import Framer Motion for Page animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const FrontPage = () => {
  return (
    <div data-testid='frontpagetest-id'>
      <motion.div
        exit='exit'
        variants={pageAnimation}
        initial='hidden'
        animate='show'
      >
        <LandingSection />
        <FeatureSection />
        <FAQSection />
      </motion.div>
    </div>
  );
};

export default FrontPage;
