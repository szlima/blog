import { useContext } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { BiError } from 'react-icons/bi';

import { BlogContext, STATUS } from '../contexts/BlogContext';

import Header from './Header';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';

function Blog() {
  const {incompleteStatus}= useContext(BlogContext);

  const getBlogComponents= () => {
    switch(incompleteStatus){

      case STATUS.loading:
        return <AiOutlineLoading />;

      case STATUS.unavailable:
        return <>
          <BiError />
          <p>Blog data unavailable</p>
        </>;

      default:
        return <>
          <Header />
          <Navbar />
          <Main />
          <Footer /> 
        </>;

    }
  };

  const getStatusClass= () => incompleteStatus ? `blog--${incompleteStatus}` : '';

  return (
    <div className={`blog ${getStatusClass()}`}>
        {getBlogComponents()}
    </div>
  );
}

export default Blog;