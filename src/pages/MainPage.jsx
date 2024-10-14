import { useContext, useEffect, useState } from 'react';
import { useHref } from 'react-router-dom';

import { STATUS } from '../utils/dataInfo';

import { BlogContext } from '../contexts/BlogContext';
import { PostListContext } from '../contexts/PostListContext';
import { PostContext } from '../contexts/PostContext';

import LoadingInfo from '../components/incompleteData/LoadingInfo';
import UnavailableInfo from '../components/incompleteData/UnavailableInfo';
import Blog from '../components/Blog';

const mainComponents= {
  [STATUS.loading]: <LoadingInfo />,
  [STATUS.unavailable]: <UnavailableInfo info='Blog data'/>,
  [STATUS.completed]: <Blog />
};

function MainPage() {
  const {blogDataStatus: status}= useContext(BlogContext);
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

  const getStatusClass= () => (status === STATUS.completed) ?
    '' : `blog--${status}`;

  return (
    <div className={`blog ${getStatusClass()}`}>
      {mainComponents[status]}
    </div>
  );
}

export default MainPage;
