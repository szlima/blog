
import Header from './Header';
import Navbar from './Navbar';
import PostArea from './PostArea';
import Aside from './Aside';

import IndexProvider from '../contexts/IndexProvider';

function Blog() {

  return (
    <IndexProvider>
      <div className="blog">

        <Header />
        <Navbar />

        <div className="content-wrapper">
          <PostArea />
          <Aside />
        </div>

      </div>
    </IndexProvider>
  );
}

export default Blog;
