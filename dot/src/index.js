import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './index.css';
import useExternalScripts from "./hooks/useExternalScripts"

ReactDOM.render(
  <App />,
  document.getElementById('root'),useExternalScripts("../public/bootstrap/js/bootstrap.bundle.js")
);
