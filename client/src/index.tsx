import React from 'react';
import * as ReactDOM from 'react-dom';
import GlobalStyle from '@/styles/global';
import App from '@/App';

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root'),
);
