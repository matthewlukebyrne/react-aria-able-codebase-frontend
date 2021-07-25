import { shallow } from 'enzyme';
import App from '../App';

// Full description of the test suite
describe('App', () => {

    // the first test
    it('render the component without crashing', () => {
        const appWrapper = shallow(<App />)    
    })
})