import { render, screen, cleanup } from '@testing-library/react';
import { shallow } from 'enzyme';
import FeatureSection from '../components/FeatureSection';
import LandingSection from '../components/LandingSection';
import FrontPage from '../pages/FrontPage';

// TDD - Red Green Refactor
describe('Front Page Components Unit Tests', () => {
  // the first test
  it('render the front page component without crashing', () => {
    render(<FrontPage />);
    const frontPageElement = screen.getByTestId('frontpagetest-id');
    // make assertions
    expect(frontPageElement).toBeInTheDocument();
  });

  it('render the Front Page components (three sections)', () => {
    const appWrapper = shallow(<FrontPage />);
    const landingSection = appWrapper.find(LandingSection);
    const featureSection = appWrapper.find(FeatureSection);
    // assertion
    expect(landingSection).toHaveLength(1);
    expect(featureSection).toHaveLength(1);
  });
});
