// import landing image from /img
import landing_image from '../img/landing_image.svg';
import {
  StyledLayout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from '../styles';

const LandingSection = () => {
  return (
    <StyledLayout data-testid='landingtest-id'>
      <StyledDescription>
        <div className='title'>
          <StyledHide>
            <h2>Accessible</h2>
          </StyledHide>
          <StyledHide>
            <h2>
              {' '}
              style <span> components </span>
            </h2>
          </StyledHide>
          <StyledHide>
            <h2> made easy...</h2>
          </StyledHide>
        </div>
        <p>Download and check out today!</p>
        <button>Find Out More</button>
      </StyledDescription>
      <StyledImage>
        <img src={landing_image} alt='landing_image' />
      </StyledImage>
    </StyledLayout>
  );
};

export default LandingSection;
