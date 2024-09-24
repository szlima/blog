import { useContext, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { STATUS } from '../utils/dataInfo';

import { PostContext } from '../contexts/PostContext';

import UnavailableInfo from '../components/incompleteData/UnavailableInfo';
import LoadingInfo from '../components/incompleteData/LoadingInfo';
import PostArea from '../components/PostArea';
import Aside from '../components/Aside';

const homeComponents= {
    [STATUS.completed]: <>
        <PostArea />
        <Aside />
    </>,
    [STATUS.unavailable]: <UnavailableInfo info='Post list'/>,
    [STATUS.notFound]: <Navigate to='/not-found' />,
    [STATUS.loading]: <LoadingInfo />,
    [STATUS.standBy]: <LoadingInfo />
};

function HomePage(){
    const {page}= useParams();
    const {loadPostList, postListStatus: status}= useContext(PostContext);

    useEffect(() => {
        loadPostList(page);
    }, [page]);

    return (
        homeComponents[status]
    );
}

export default HomePage;