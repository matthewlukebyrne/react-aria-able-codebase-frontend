import styled from 'styled-components';
import profile_pic from '../img/profile.jpg';


// Import Framer Motion for Page animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const Contact = () => {
  return (
    <StyledContact
      exit='exit'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
    >
      <div>
        <StyledSocial>
          <StyledCircle />
          <a
            href='https://www.linkedin.com/in/matthewlukebyrne/'
            target='_blank'
            rel='noreferrer'
          >
            {' '}
            <h2>LinkedIn</h2>
          </a>
        </StyledSocial>
        <StyledSocial>
          <StyledCircle />
          <a
            href='https://github.com/matthewlukebyrne'
            target='_blank'
            rel='noreferrer'
          >
            {' '}
            <h2>GitHub</h2>
          </a>
        </StyledSocial>
        <StyledSocial>
          <StyledCircle />
          <a href='https://www.kooba.ie/' target='_blank' rel='noreferrer'>
            {' '}
            <h2>Kooba</h2>
          </a>
        </StyledSocial>
      </div>
      <StyledContactImage>
        <img src={profile_pic} alt='profile_img' />
      </StyledContactImage>
    </StyledContact>
  );
};

export default Contact;

const StyledContact = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 10rem;
  color: #e3e3e3;
  min-height: 90vh;
`;

// const StyledTitle = styled.div`
//   margin-bottom: 4rem;
//   color: #1b1b1b;
// `;

// const StyledHide = styled.div`
//   overflow: hidden;
// `;

const StyledSocial = styled.div`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }

  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledCircle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background-color: #f5f5f5;
`;

const StyledContactImage = styled.div`
  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
    border-radius: 50%;
  }

  /* Added Media Queries */
  @media (max-width: 1300px) {
    img {
      display: none;
    }
  }
`;
