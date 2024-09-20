import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import IndexProvider from './contexts/IndexProvider';

import MainPage from './pages/MainPage';
import Home from './pages/Home';
import NoPage from './pages/NoPage';

import './styles/css/index.css';

createRoot(document.getElementById('root')).render(
  <IndexProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />}>

          <Route index element={<Home />}/>
          <Route path='/:page' element={<Home />}/>
          <Route path='/not-found' element={<NoPage />}/>
          <Route path='*' element={<Navigate to='/not-found' />}/>

        </Route>
      </Routes>
    </BrowserRouter>
  </IndexProvider>
);
