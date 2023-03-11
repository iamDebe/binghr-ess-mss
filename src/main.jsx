import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './MainPage';
import { setup } from "goober";
import { GlobalStyles } from './globalStyle';

setup(React.createElement);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <Main />
  </React.StrictMode>,
)
