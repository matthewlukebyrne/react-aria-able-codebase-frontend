import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar';

// TDD - Red Green Refactor
describe('Navbar Section Component Unit Tests', () => {
  // the first test
  it('render the navbar component correctly without crashing with 3 items', () => {
    render(<Navbar />);
    const navBarPonent = screen.getByTestId('navtest-id');
    // make assertions
    expect(navBarPonent).toBeInTheDocument();
    expect(navBarPonent).toHaveTextContent('Components', 'Gallery', 'Contact');
  });

  test('navbar section styled components', () => {
    const navStyles = renderer.create(<Navbar />).toJSON();
    expect(navStyles).toMatchSnapshot();
    expect(navStyles).toHaveStyleRule('min-height', '10vh');
    expect(navStyles).toHaveStyleRule('justify-content', 'space-between');
    expect(navStyles).toHaveStyleRule('background-color', 'whitesmoke');
  });
});
