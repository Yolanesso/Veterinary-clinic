import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './scss/main.css';
import 'macro-css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();
