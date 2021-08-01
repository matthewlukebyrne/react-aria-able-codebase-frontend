// import logo for now
import features_snap from '../img/features_snap.png';

// import icons from Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUniversalAccess,
  faBook,
  faBookReader,
  faVials,
} from '@fortawesome/free-solid-svg-icons';

// Styled Components
import styled from 'styled-components';
import { StyledLayout, StyledDescription, StyledImage } from '../styles';

const FeatureSection = () => {
  return (
    <>
    <StyledFeatures data-testid='featuretest-id'>
      {/* Side Main Features Image */}
      <StyledDescription>
        {/* Title */}
        <h2>
          People should <span>perceive</span> understand, navigate, and{' '}
          <span>interact</span> with the web.
        </h2>
        {/* 4 Cards Replicated */}
        <div className='cards'>
          <div className='card'>
            <div className='icon'>
              <FontAwesomeIcon icon={faUniversalAccess} title='icon-1' />
              <h3>A11y Initiative and WCAG guidelines standards.</h3>
            </div>
            <p>
              Components that have ARIA roles attached and elements that keep
              high consistent standards across semantic descriptive HTML5
              atrributes.
            </p>
          </div>
          <div className='card'>
            <div className='icon'>
              <FontAwesomeIcon icon={faBook} title='icon-2' />
              <h3>Documentation at hand.</h3>
            </div>
            <p>
              Everything in one place and easy to find for developers. A
              documentation tab is provided with code snippets explaining
              functionality.
            </p>
          </div>
          <div className='card'>
            <div className='icon'>
              <FontAwesomeIcon icon={faBookReader} title='icon-3' />
              <h3>Technology and Screen Readers Features</h3>
            </div>
            <p>
              Screen readers activating ARIA roles insuring the people who can
              not traditonally access the web are getting the same user
              experience. This can be showcased in the testing area!
            </p>
          </div>
          <div className='card'>
            <div className='icon'>
              <FontAwesomeIcon icon={faVials} title='icon-4' />
              <h3>Developed with React Testing Library, Jest and Enzyme.</h3>
            </div>
            <p>
              Custom components that are tested and proccessed to ensure that
              they are performing to the best of the ability with no side
              affects given to the user.
            </p>
          </div>
        </div>
      </StyledDescription>
    </StyledFeatures>
    <StyledImage>
        <img src={features_snap} alt='features_image' />
    </StyledImage>
    </>
  );
};

export default FeatureSection;

// Styled Components Area
const StyledFeatures = styled(StyledLayout)`
  background-color: whitesmoke;
  color: #333;

  h2,
  p {
    padding: 3rem 0rem;
    color: #333;
  }

  // Inserted some mobile media queries (drop it when it shrinks)
  @media (max-width: 1300px) {
    display: none;
  }
`;

// const StyledCards = styled.div`
// 	margin: 5rem 0rem;
// 	display: flex;
// 	flex-wrap: wrap;
// 	font-size: 1.5rem;
// `;

// const StyledCard = styled.div`
//   // 	flex-basis: 100rem;
//   // 	h3 {
//   // 		margin-left: 5rem;
//   // 		background: #fff;
//   // 		border-radius: 16px;
//   // 		color: #1b1b1b;
//   // 		padding: 1rem;
//   // 	}
//   //  Font Awesome Icons
//   .icon {
//     display: flex;
//     align-items: center;
//   }
// `;
