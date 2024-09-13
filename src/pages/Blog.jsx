
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Footer from '../components/Footer';

import IndexProvider from '../contexts/IndexProvider';

function Blog() {

  return (
    <IndexProvider>
      <div className='blog'>

        <Header />
        <Navbar />
        <Main />
        <Footer />

      </div>
    </IndexProvider>
  );
}

export default Blog;
