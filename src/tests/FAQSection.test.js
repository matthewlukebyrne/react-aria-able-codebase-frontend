import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import FAQSection from '../components/FAQSection';

// TDD - Red Green Refactor
describe('FAQ Section Component Unit Tests', () => {
  // the first test
  it('renders the FAQ section component without crashing', () => {
    render(<FAQSection />);
    const faqSectionPonent = screen.getByTestId('faqtest-id');
    // make assertions
    expect(faqSectionPonent).toBeInTheDocument();
    expect(faqSectionPonent).toHaveTextContent('What is Aria-Able?');
  });

  it('faq should contain eight paragraphs tags', () => {
    const faqQuery = shallow(<FAQSection />);
    const faqSectionPtags = faqQuery.find('p');
    expect(faqSectionPtags).toHaveLength(8);
  });
});
