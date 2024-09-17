import { createRoot } from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import BlogPage from './pages/BlogPage';
import Home from './pages/Home';

import './styles/css/index.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<BlogPage />}>

        <Route index element={<Home />}/>
        <Route path={'/:page'} element={<Home />}/>

      </Route>
    </Routes>
  </BrowserRouter>
);
