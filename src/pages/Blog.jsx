import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import IndexProvider from '../contexts/IndexProvider';

function Blog() {

  return (
    <IndexProvider>
      <div className='blog'>

        <Header />
        <Navbar />

        <main className='main'>
          <Outlet />
        </main>

        <Footer />

      </div>
    </IndexProvider>
  );
}

export default Blog;
