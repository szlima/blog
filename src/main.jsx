import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import {POST_LIST_TYPE} from './utils/dataInfo';

import IndexProvider from './contexts/IndexProvider';

import MainPage from './pages/MainPage';
import PostListPage from './pages/PostListPage';
import NoPage from './pages/NoPage';

import './styles/css/index.css';

createRoot(document.getElementById('root')).render(
  <IndexProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />}>

          <Route index element={<PostListPage listType={POST_LIST_TYPE.fullList}/>}/>
          <Route path='/:page' element={<PostListPage listType={POST_LIST_TYPE.fullList}/>}/>
          <Route path={'/authors/:authorId'} element={<PostListPage listType={POST_LIST_TYPE.listByAuthor}/>}/>
          <Route path={'/authors/:authorId/:page'} element={<PostListPage listType={POST_LIST_TYPE.listByAuthor}/>}/>
          <Route path='/not-found' element={<NoPage />}/>
          <Route path='*' element={<Navigate to='/not-found' />}/>

        </Route>
      </Routes>
    </BrowserRouter>
  </IndexProvider>
);
