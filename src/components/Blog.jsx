
import Header from './Header';
import Navbar from './Navbar';
import Aside from './Aside';

function Blog() {

  return (
    <div className="blog">

      <Header />
      <Navbar/>

      <div className="content-wrapper">
        <div className="posts">
        </div>
        <Aside />
      </div>

    </div>
  );
}

export default Blog;
