// Global Styles
import GlobalStyle from './components/GlobalStyle';
// Import Elements
import FrontPage from './pages/FrontPage';
// Import the Navbar
import Navbar from './components/Navbar';
// Import the Contact Page
import Contact from './pages/Contact';
// Import the Contact Page
import Components from './pages/Components';
/*
  Using React Router we can direct the pages we want to go to
  The Route Facilates the full routing of the application
  A Switch stops when it comes across the EXACT URL
*/
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div data-testid='apptest-id' className='App'>
      <BrowserRouter>
        <GlobalStyle />
        <Navbar />
        <Switch>
          {/* Home Path */}
          <Route path='/' exact>
            <FrontPage />
          </Route>
          {/* Components Path */}
          <Route path='/components'>
            <Components />
          </Route>
          {/* Contact Path */}
          <Route path='/contact'>
            <Contact />
          </Route>
          {/* If all else fails 404 not Found */}
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
