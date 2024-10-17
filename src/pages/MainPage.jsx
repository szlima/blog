import { useContext, useEffect, useState } from 'react';
import { useHref } from 'react-router-dom';

import { STATUS } from '../utils/dataInfo';

import { BlogContext } from '../contexts/BlogContext';
import { PostListContext } from '../contexts/PostListContext';
import { PostContext } from '../contexts/PostContext';

import ComponentLoader from '../components/incompleteData/ComponentLoader';
import Blog from '../components/Blog';

function MainPage() {
  const {blogDataStatus}= useContext(BlogContext);
  const {resetPostListContext}= useContext(PostListContext);
  const {resetPostContext}= useContext(PostContext);
  const currentHref= useHref();
  const [previousHref, setPreviousHref]= useState(undefined);

  useEffect(() => {

    checkHrefChange();

  }, [currentHref]);

  const checkHrefChange= () => {
    const postListPattern= /^(\/authors\/[0-9]+)?(\/?|\/[0-9]+)?$/;
    const fullPostPattern= /^\/posts\//;

    if(fullPostPattern.test(previousHref))
      resetPostContext();
    else if(postListPattern.test(previousHref) && !postListPattern.test(currentHref))
      resetPostListContext();

    setPreviousHref(currentHref);
  };

  const getStatusClass= () => (blogDataStatus === STATUS.completed) ?
    '' : `blog--${blogDataStatus}`;

  return (
    <div className={`blog ${getStatusClass()}`}>
      <ComponentLoader status={blogDataStatus} infoName='Blog data'>
        <Blog />
      </ComponentLoader>
    </div>
  );
}

export default MainPage;
