import React, { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

const root = createRoot(document.querySelector('#root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);