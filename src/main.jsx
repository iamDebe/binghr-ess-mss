import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './MainPage'
import './index.css'
import { setup } from "goober";

setup(React.createElement);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
