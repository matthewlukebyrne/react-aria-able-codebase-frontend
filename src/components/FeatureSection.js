// import logo for now
import landing_image from '../img/landing_image.svg';

// import icons from Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

// Styled Components
import styled from 'styled-components';
import { StyledLayout, StyledDescription, StyledImage } from '../styles';

const FeatureSection = () => {
  return (
    <StyledFeatures data-testid='featuretest-id'>
      {/* Side Main Features Image */}
      <StyledImage>
        <img src={landing_image} alt='features_image' />
      </StyledImage>
      <StyledDescription>
        {/* Title */}
        <h2>
          High <span>quality</span> components
        </h2>
        {/* 4 Cards Replicated */}
        <div className='cards'>
          <div className='card'>
            <div className='icon'>
              <FontAwesomeIcon icon={faCoffee} title='icon-1' />
              <h3>Lorem ipsum dolor sit amet.</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='card'>
            <div className='icon'>
              <FontAwesomeIcon icon={faCoffee} title='icon-2' />
              <h3>Lorem ipsum dolor sit amet.</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='card'>
            <div className='icon'>
              <FontAwesomeIcon icon={faCoffee} title='icon-3' />
              <h3>Lorem ipsum dolor sit amet.</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='card'>
            <div className='icon'>
              <FontAwesomeIcon icon={faCoffee} title='icon-4' />
              <h3>Lorem ipsum dolor sit amet.</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </StyledDescription>
    </StyledFeatures>
  );
};

export default FeatureSection;

// Styled Components Area
const StyledFeatures = styled(StyledLayout)`
  background-color: whitesmoke;
  color: #333;

  h2,
  p {
    padding: 5rem 0rem;
    color: #333;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
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
// 	flex-basis: 100rem;
// 	h3 {
// 		margin-left: 5rem;
// 		background: #fff;
// 		border-radius: 16px;
// 		color: #1b1b1b;
// 		padding: 1rem;
// 	}
//  Font Awesome Icons
// .icon {
//   display: flex;
//   align-items: center;
// }
// `;
