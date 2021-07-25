import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import FAQSection from '../components/FAQSection';
import FeatureSection from '../components/FeatureSection';
import LandingSection from '../components/LandingSection';
import FrontPage from '../pages/FrontPage';

// TDD - Red Green Refactor
describe('Front Page Components Unit Tests', () => {
  it('render the front page component without crashing', () => {
    render(<FrontPage />);
    const frontPageElement = screen.getByTestId('frontpagetest-id');
    // make assertions
    expect(frontPageElement).toBeInTheDocument();
  });

  it('render the Front Page components with three sections making up the page', () => {
    const appWrapper = shallow(<FrontPage />);
    const landingSection = appWrapper.find(LandingSection);
    const featureSection = appWrapper.find(FeatureSection);
    const faqSection = appWrapper.find(FAQSection);
    // assertion
    expect(landingSection).toHaveLength(1);
    expect(featureSection).toHaveLength(1);
    expect(faqSection).toHaveLength(1);
  });
});
