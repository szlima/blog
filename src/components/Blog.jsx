
import Header from './Header';
import Navbar from './Navbar';
import PostArea from './PostArea';
import Aside from './Aside';

import { BlogProvider } from '../contexts/BlogContext';

function Blog() {

  return (
    <BlogProvider>
      <div className="blog">

        <Header />
        <Navbar />

        <div className="content-wrapper">
          <PostArea />
          <Aside />
        </div>

      </div>
    </BlogProvider>
  );
}

export default Blog;
