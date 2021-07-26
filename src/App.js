// Global Styles
import GlobalStyle from './components/GlobalStyle';
// Import Elements
import FrontPage from './pages/FrontPage';
// Import the Navbar
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div data-testid='apptest-id' className='App'>
      <GlobalStyle />
      <Navbar />
      <FrontPage />
    </div>
  );
};

export default App;
