// Adapter for Enzyme 17 unofficial version
// https://www.npmjs.com/package/@wojtekmaj/enzyme-adapter-react-17
import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });
