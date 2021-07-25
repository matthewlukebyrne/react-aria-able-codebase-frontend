import { icon } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { render, screen, cleanup } from '@testing-library/react';
import { shallow } from 'enzyme';
import FeatureSection from '../components/FeatureSection';
import LandingSection from '../components/LandingSection';
import FrontPage from '../pages/FrontPage';

// TDD - Red Green Refactor
describe('Feature Section Component Unit Tests', () => {
  // the first test
  it('render the front page component without crashing', () => {
    render(<FeatureSection />);
    const featureSectionPonent = screen.getByTestId('featuretest-id');
    // make assertions
    expect(featureSectionPonent).toBeInTheDocument();
  });

  // the first test
  it('should render the four Font Awesome Icons on the page', () => {
    render(<FeatureSection />);
    const icon_1 = screen.getByTitle('icon-1');
    const icon_2 = screen.getByTitle('icon-2');
    const icon_3 = screen.getByTitle('icon-3');
    const icon_4 = screen.getByTitle('icon-4');
    // make assertions
    expect(icon_1).toBeInTheDocument();
    expect(icon_2).toBeInTheDocument();
    expect(icon_3).toBeInTheDocument();
    expect(icon_4).toBeInTheDocument();
  });
});
