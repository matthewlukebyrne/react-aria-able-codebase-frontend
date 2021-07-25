import { render, screen, cleanup } from '@testing-library/react';
import { shallow } from 'enzyme';
import FeatureSection from '../components/FeatureSection';
import LandingSection from '../components/LandingSection';
import FrontPage from '../pages/FrontPage';

// TDD - Red Green Refactor
describe('Landing Section Component Unit Tests', () => {
  // the first test
  it('render the front page component without crashing', () => {
    render(<LandingSection />);
    const landingSectionPonent = screen.getByTestId('landingtest-id');
    // make assertions
    expect(landingSectionPonent).toBeInTheDocument();
    expect(landingSectionPonent).toHaveTextContent(
      'Accessible style components made easy...'
    );
  });
});
