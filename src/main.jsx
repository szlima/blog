import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import IndexProvider from './contexts/IndexProvider';

import MainPage from './pages/MainPage';
import Home from './pages/Home';

import './styles/css/index.css';

createRoot(document.getElementById('root')).render(
  <IndexProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />}>

          <Route index element={<Home />}/>
          <Route path={'/:page'} element={<Home />}/>

        </Route>
      </Routes>
    </BrowserRouter>
  </IndexProvider>
);
