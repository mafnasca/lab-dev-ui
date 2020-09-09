import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './components/LandingPage/index'; 
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
   <LandingPage/>,
  document.getElementById('root')
);

serviceWorker.register();
