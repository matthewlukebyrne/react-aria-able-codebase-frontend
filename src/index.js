import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* Using React Router DOM we wrap the entire application with React Router 
  to have full control
  over my pages in the application 
  https://reactrouter.com/web/api/BrowserRouter
*/
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
