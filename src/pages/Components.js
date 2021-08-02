// Styled Components
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Import Framer Motion for Page animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const Components = () => {
  return (
    <StyledWork
      exit='exit'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
    >
      <StyledPonent>
        <Link to='/components/alert-role'>
          <h2>Alert</h2>
          <div className='line'></div>
        </Link>
      </StyledPonent>
      <StyledPonent>
        <Link to='/components/banner-role'>
          <h2>Banner</h2>
          <div className='line'></div>
        </Link>
      </StyledPonent>
      <StyledPonent>
        <Link to='/components/button-role'>
          <h2>Button</h2>
          <div className='line'></div>
        </Link>
      </StyledPonent>
      <StyledPonent>
        <Link to='/components/checkbox-role'>
          <h2>Checkbox</h2>
          <div className='line'></div>
        </Link>
      </StyledPonent>
      <StyledPonent>
        <Link to='/components/comp-role'>
          <h2>Complimentary</h2>
          <div className='line'></div>
        </Link>
      </StyledPonent>
      <StyledPonent>
        <Link to='/components/dialog-role'>
          <h2>Dialog</h2>
          <div className='line'></div>
        </Link>
      </StyledPonent>
      <StyledPonent>
        <Link to='/components/document-role'>
          <h2>Document</h2>
          <div className='line'></div>
        </Link>
      </StyledPonent>
      <StyledPonent>
        <Link to='/components/feed-role'>
          <h2>Feed</h2>
          <div className='line'></div>
        </Link>
      </StyledPonent>
      <StyledPonent>
        <Link to='/components/orient-role'>
          <h2>Orientation</h2>
          <div className='line'></div>
        </Link>
      </StyledPonent>
      <StyledPonent>
        <Link to='/components/req-role'>
          <h2>Required</h2>
          <div className='line'></div>
        </Link>
      </StyledPonent>
      <StyledPonent>
        <Link to='/components/search-role'>
          <h2>Search</h2>
          <div className='line'></div>
        </Link>
      </StyledPonent>
      <StyledPonent>
        <Link to='/components/switch-role'>
          <h2>Switch</h2>
          <div className='line'></div>
        </Link>
      </StyledPonent>
      <StyledPonent>
        <Link to='/components/tab-role'>
          <h2>Tab</h2>
          <div className='line'></div>
        </Link>
      </StyledPonent>
      <StyledPonent>
        <Link to='/components/textbox-role'>
          <h2>Textbox</h2>
          <div className='line'></div>
        </Link>
      </StyledPonent>
      <StyledPonent>
        <Link to='/components/value-role'>
          <h2>Value</h2>
          <div className='line'></div>
        </Link>
      </StyledPonent>
    </StyledWork>
  );
};

export default Components;


// Styled Components
const StyledWork = styled(motion.div)`
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