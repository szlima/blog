import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Blog from './Blog';

import './styles/css/index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Blog />
  </StrictMode>,
);
