// Imports from a combination of Jest, React Library and Enzyme
import { shallow } from 'enzyme';
import App from '../App';
import FrontPage from '../pages/FrontPage';

// Full description of the test suite (App Component)
// TDD - Red Green Refactor
describe('App Components Unit Tests', () => {
  // the first test
  it('render the primary component without crashing', () => {
    const appWrapper = shallow(<App />);
  });

  it('render the Front Page and only expects one render from App Component', () => {
    const appWrapper = shallow(<App />);
    const frontPage = appWrapper.find(FrontPage);
    // assertion
    expect(frontPage).toHaveLength(1);
  });
});
