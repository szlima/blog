import { createRoot } from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Blog from './pages/Blog';
import Home from './pages/Home';

import './styles/css/index.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Blog />}>

        <Route index element={<Home />}/>

      </Route>
    </Routes>
  </BrowserRouter>
);
