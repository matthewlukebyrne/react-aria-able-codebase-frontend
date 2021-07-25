// Default Testing Library
import '@testing-library/jest-dom';

// Adapter for Enzyme 17 unofficial version
// https://www.npmjs.com/package/@wojtekmaj/enzyme-adapter-react-17
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

// Import Jest Styling Components
import 'jest-styled-components';
