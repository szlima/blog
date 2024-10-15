import { useContext, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { STATUS } from '../utils/dataInfo';

import { PostContext } from '../contexts/PostContext';

import LoadingInfo from '../components/incompleteData/LoadingInfo';
import UnavailableInfo from '../components/incompleteData/UnavailableInfo';
import PostArea from '../components/postArea/PostArea';
import Aside from '../components/sidebar/Aside';

const postComponents= {
    [STATUS.completed]: <>
        <PostArea />
        <Aside />
    </>,
    [STATUS.notFound]: <Navigate to='/not-found'/>,
    [STATUS.unavailable]: <UnavailableInfo info='Post'/>,
    [STATUS.loading]: <LoadingInfo />,
    [STATUS.standBy]: <LoadingInfo />
};

function PostPage(){
    const {postStatus: status, loadPost}= useContext(PostContext);
    const {postId}= useParams();

    useEffect(() => {
        loadPost(postId);
    }, [postId]);

    return (
        postComponents[status]
    );
}

export default PostPage;