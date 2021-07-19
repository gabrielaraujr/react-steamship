import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import GlobalStyle from './assets/styles/global';

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);