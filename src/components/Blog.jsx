import { useState } from 'react';
import { useEffect } from 'react';

import Header from './Header';
import Navbar from './Navbar';
import PostArea from './PostArea';
import Aside from './Aside';

const post= {
  heading: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  firstContent: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto.",
  author: "Leanne Graham",
  image: "https://picsum.photos/seed/picsum/300/200"
};

function Blog() {
  const [posts, setPosts]= useState([]);

  useEffect(() => {
    setPosts([post, post, post]);
  }, []);

  return (
    <div className="blog">

      <Header />
      <Navbar/>

      <div className="content-wrapper">
        <PostArea posts={posts}/>
        <Aside />
      </div>

    </div>
  );
}

export default Blog;
