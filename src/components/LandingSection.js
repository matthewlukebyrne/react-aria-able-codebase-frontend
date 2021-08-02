// import landing image from /img
import landing_image from '../img/landing_logo.svg';
import {
  StyledLayout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from '../styles';

// Imoort Framer Motion for some custom animation on the landing page to target the span
import { motion } from 'framer-motion';
// Need Wave Line for landing
import WaveLanding from './WaveLanding';

const LandingSection = () => {
  
  // With Framer Motion we can use varients to declare the information as a variable and then pass down as a prop
  const spanAnimation = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2 } },
  };

  return (
    <StyledLayout data-testid='landingtest-id'>
      <StyledDescription>
        <div className='title'>
          <StyledHide>
            <h1>Accessible</h1>
          </StyledHide>
          <StyledHide>
            <h1>
              {' '}
              styled{' '}
              <motion.span
                variants={spanAnimation}
                initial='hidden'
                animate='show'
              >
                components
              </motion.span>
            </h1>
          </StyledHide>
          <StyledHide>
            <h1> all in one place...</h1>
          </StyledHide>
        </div>
        <p>Check out the project today!</p>
        <a
            href='https://project-aria-able-backend-web-app.netlify.app'
            alt='link_to_storybook'
            target='_blank'
            rel='noreferrer'
          ><button>
          Find Out More
        </button></a>
      </StyledDescription>
      <StyledImage>
        <motion.img
          variants={spanAnimation}
          initial='hidden'
          animate='show'
          src={landing_image}
          alt='main_cover_image'
        />
      </StyledImage>
      {/* Render Wave */}
      <WaveLanding />
    </StyledLayout>
  );
};

export default LandingSection;
