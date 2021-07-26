import styled from 'styled-components';
import { StyledLayout } from '../styles';

const FAQSection = () => {
  return (
    <StyledFAQ data-testid='faqtest-id'>
      <h2>
        Questions <span>FAQ</span>
      </h2>
      <div className='question'>
        <h4>What is Aria-Able?</h4>
        <div className='answer'>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
            fugit?
          </p>
        </div>
        <div className='faq-line'></div>
      </div>
      <div className='question'>
        <h4>Where can I access the components?</h4>
        <div className='answer'>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
            fugit?
          </p>
        </div>
        <div className='faq-line'></div>
      </div>
      <div className='question'>
        <h4>Is there a documentation area?</h4>
        <div className='answer'>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
            fugit?
          </p>
        </div>
        <div className='faq-line'></div>
      </div>
      <div className='question'>
        <h4>Do I have to pay for these? Are they open source?</h4>
        <div className='answer'>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
            fugit?
          </p>
        </div>
        <div className='faq-line'></div>
      </div>
    </StyledFAQ>
  );
};

export default FAQSection;

const StyledFAQ = styled(StyledLayout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-top: 5rem;
    font-weight: lighter;
  }
  /* Line for the FAQ */
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
  // Inserted some mobile media queries
  @media (max-width: 1300px) {
    display: block;
    padding: 5rem 2rem;
    text-align: center;
  }
`;
