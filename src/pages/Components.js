// Images Area
import landing_image from '../img/landing_image.svg';

// Styled Components
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Components = () => {
  return (
    <StyledWork>
      <StyledPonent>
        <h2>Ponent 1</h2>
        <div className="line"></div>
        <Link>
            <img src={landing_image} alt="ponent_1" />
        </Link>
      </StyledPonent>
      <StyledPonent>
        <h2>Ponent 2</h2>
        <div className="line"></div>
        <Link>
            <img src={landing_image} alt="ponent_2" />
        </Link>
      </StyledPonent>
      <StyledPonent>
        <h2>Ponent 3</h2>
        <div className="line"></div>
        <Link>
            <img src={landing_image} alt="ponent_3" />
        </Link>
      </StyledPonent>
    </StyledWork>
  );
};

export default Components;


// Styled Components
const StyledWork = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;

  }
`;

const StyledPonent = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #e3e3e3;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;