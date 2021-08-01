import { render, screen } from '@testing-library/react';
import LandingSection from '../components/LandingSection';
import renderer from 'react-test-renderer';

// TDD - Red Green Refactor
describe('Landing Section Component Unit Tests', () => {
  // the first test
  it('render the front page component without crashing', () => {
    render(<LandingSection />);
    const landingSectionPonent = screen.getByTestId('landingtest-id');
    // make assertions
    expect(landingSectionPonent).toBeInTheDocument();
    expect(landingSectionPonent).toHaveTextContent(
      'Accessible styled components all in one place...'
    );
  });

  test('landing section styled components', () => {
    const landingStyles = renderer.create(<LandingSection />).toJSON();
    expect(landingStyles).toMatchSnapshot();
    expect(landingStyles).toHaveStyleRule('min-height', '90vh');
    expect(landingStyles).toHaveStyleRule('display', 'flex');
    expect(landingStyles).toHaveStyleRule('color', 'white');
  });
});
