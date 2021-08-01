// Imports from a combination of Jest, React Library and Enzyme
import { render, screen } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import Components from '../pages/Components';
import Contact from '../pages/Contact';
import FrontPage from '../pages/FrontPage';
import { MemoryRouter } from 'react-router-dom';
import { NotFound } from 'http-errors';

// Full description of the test suite (App Component)
// TDD - Red Green Refactor
describe('App Components Unit Tests', () => {
  it('render the primary component without crashing', () => {
    render(<App />);
    const app = screen.getByTestId('apptest-id');
    // make assertions
    expect(app).toBeInTheDocument();
  });

  it('render the Front Page and only expects one render from App Component', () => {
    const appWrapper = shallow(<App />);
    const frontPage = appWrapper.find(FrontPage);
    // assertion
    expect(frontPage).toHaveLength(1);
  });

  it('render the Components Page and only expects one render from App Component', () => {
    const appWrapper = shallow(<App />);
    const frontPage = appWrapper.find(Components);
    // assertion
    expect(frontPage).toHaveLength(1);
  });

  it('render the Contact Page and only expects one render from App Component', () => {
    const appWrapper = shallow(<App />);
    const frontPage = appWrapper.find(Contact);
    // assertion
    expect(frontPage).toHaveLength(1);
  });

  // Testing
  it('invalid path should redirect to 404 Not Found Page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/test']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(FrontPage)).toHaveLength(1);
    expect(wrapper.find(NotFound)).toHaveLength(0);
  });
});
