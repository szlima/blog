import { useContext } from 'react';

import { STATUS } from '../utils/dataInfo';

import { BlogContext } from '../contexts/BlogContext';

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

  const getStatusClass= () => (status === STATUS.completed) ?
    '' : `blog--${status}`;

  return (
    <div className={`blog ${getStatusClass()}`}>
      {mainComponents[status]}
    </div>
  );
}

export default MainPage;
