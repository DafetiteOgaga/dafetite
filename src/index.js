import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

// automatically detect github-pages environment and use HashRouter in that case
const isGitHubPages = window.location.hostname.includes('github.io');
const RouterToUse = isGitHubPages ? HashRouter : BrowserRouter;
root.render(
  <RouterToUse>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RouterToUse>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
