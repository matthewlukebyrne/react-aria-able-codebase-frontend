// Global Styles
import GlobalStyle from './components/GlobalStyle';
// Import Elements
import FrontPage from './pages/FrontPage';

const App = () => {
  return (
    <div data-testid='apptest-id' className='App'>
      <GlobalStyle />
      <FrontPage />
    </div>
  );
};

export default App;
