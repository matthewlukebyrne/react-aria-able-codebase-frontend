import { render, screen } from '@testing-library/react';
import LandingSection from '../components/LandingSection';

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
