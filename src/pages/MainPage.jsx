import { useContext, useEffect, useState } from 'react';

import { STATUS } from '../utils/dataInfo';

import { BlogContext } from '../contexts/BlogContext';

import LoadingInfo from '../components/incompleteData/LoadingInfo';
import UnavailableInfo from '../components/incompleteData/UnavailableInfo';
import Blog from '../components/Blog';

const blogComponents= {
  [STATUS.loading]: <LoadingInfo />,
  [STATUS.unavailable]: <UnavailableInfo />,
  [STATUS.completed]: <Blog />
};

function MainPage() {
  const {blogDataStatus}= useContext(BlogContext);
  const [mainStatus, setMainStatus]= useState(STATUS.loading);

  useEffect(() => {
    const status= checkAllStatus();
    setMainStatus(status);

  }, [blogDataStatus]);

  const checkAllStatus= () => {

    if(blogDataStatus === STATUS.loading)
      return STATUS.loading;
    else if(blogDataStatus === STATUS.unavailable)
      return STATUS.unavailable;
    else
      return STATUS.completed;
  };

  const getStatusClass= () => (mainStatus === STATUS.completed) ?
    '' : `blog--${mainStatus}`;

  return (
    <div className={`blog ${getStatusClass()}`}>
      {blogComponents[mainStatus]}
    </div>
  );
}

export default MainPage;
