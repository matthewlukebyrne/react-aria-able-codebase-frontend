// import landing image from /img
import landing_image from '../img/landing_image.svg';

import styled from 'styled-components';

const LandingSection = () => {
  return (
    <StyledLanding data-testid='landingtest-id'>
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
    </StyledLanding>
  );
};
export default LandingSection;

// Styled Components
const StyledLanding = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;

  img {
    object-fit: cover;
    height: 80vh;
  }
`;

const StyledHide = styled.div`
  overflow: hidden;
`;
