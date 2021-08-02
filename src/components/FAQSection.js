import styled from 'styled-components';
import { StyledLayout } from '../styles';

const FAQSection = () => {
  return (
    <StyledFAQ data-testid='faqtest-id'>
      <h2>
        Questions <span>FAQ</span>
      </h2>
      <div className='question'>
        <h4>What is Aria-Able? What is the concept all about?</h4>
        <div className='answer'>
          <p>
            A area developed for developers for accessible web component
            testing.
          </p>
          <p>
            Delivered through Storybook JS a detailed design library for
            elements; the creation of a accessible library of React components
            encapsulated with logic that pass guidelines to accessiblity
            officially with Web Content Accessibility Guidelines (WCAG).
            <br></br>
            <br></br>
            Accessible Rich Internet Applications (ARIA) is a set of attributes
            that define ways to make web content and web applications
            (especially those developed with JavaScript) more accessible to
            people with disabilities.
          </p>
        </div>
        <div className='faq-line'></div>
      </div>
      <div className='question'>
        <h4>
          What else can I do with the components to ensure they are fully accessible?
        </h4>
        <div className='answer'>
          <p>Features including Actions, Knobs, A11y.</p>
          <p>
            Along with the ability to insert in and out components you can check
            for color contrast themes, actions, and click events registered
            through the DOM. This is delivered through Storybook JS addon
            features entitled Knobs and Actions, and A11y that is integrated
            into the Storybook framework.
          </p>
        </div>
        <div className='faq-line'></div>
      </div>
      <div className='question'>
        <h4>Is there a documentation area?</h4>
        <div className='answer'>
          <p>Full descriptions and details.</p>
          <p>
            With the documentation provided through official ARIA supported
            channels such as Mozilla Developer Network (MDN) documentation is provided
            for each element and role that was inplemented on the Storybook
            platform. There is a details section stating what exactly each
            components does and a example section of code to compliment.
          </p>
        </div>
        <div className='faq-line'></div>
      </div>
      <div className='question'>
        <h4>Do I have to pay for these? Are these components open source?</h4>
        <div className='answer'>
          <p>Free of charge.</p>
          <p>
            These components were created by developers and for developers; increasing usability across web applications and the
            internet. Coming soon is the ability to pull down these components
            via NPM and Yarn package managers respectively; where you can import and declare in your code
            the ARIA implementation to any open source projects!
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
