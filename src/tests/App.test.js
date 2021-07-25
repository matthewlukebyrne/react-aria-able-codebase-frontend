import { shallow } from 'enzyme';
import App from '../App';
import LandingSection from '../components/LandingSection';
import FrontPage from '../pages/FrontPage';

// Full description of the test suite (App Component)
// TDD - Red Green Refactor
describe('Pages Components Unit Tests', () => {

    // the first test
    it('render the primary component without crashing', () => {
        const appWrapper = shallow(<App />);    
    })

    it('render the Front Page and only expects one render from App', () => {
        const appWrapper = shallow(<App />);
        const frontPage = appWrapper.find(FrontPage);
        // assertion
        expect(frontPage).toHaveLength(1);
    })

    it('render the Front Page component to render Landing Section', () => {
        const appWrapper = shallow(<FrontPage />);
        const landingSection = appWrapper.find(LandingSection);
        // assertion
        expect(landingSection).toHaveLength(1);
    })

    it('', () => {
        const appWrapper = shallow(<App />);
        const appState = appWrapper.state();
    })

})