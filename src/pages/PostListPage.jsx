import { useContext, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { STATUS, POST_LIST_TYPE } from '../utils/dataInfo';

import { PostListContext } from '../contexts/PostListContext';

import UnavailableInfo from '../components/incompleteData/UnavailableInfo';
import LoadingInfo from '../components/incompleteData/LoadingInfo';
import PostArea from '../components/PostArea';
import Aside from '../components/Aside';

const postListComponents= {
    [STATUS.completed]: <>
        <PostArea />
        <Aside />
    </>,
    [STATUS.unavailable]: <UnavailableInfo info='Post list'/>,
    [STATUS.notFound]: <Navigate to='/not-found' />,
    [STATUS.loading]: <LoadingInfo />,
    [STATUS.standBy]: <LoadingInfo />
};

function PostListPage({listType}){
    const {page, authorId}= useParams();
    const {
        loadFullPostList, loadPostListByAuthor, postListStatus: status
    }= useContext(PostListContext);

    const loadPostList= {
        [POST_LIST_TYPE.fullList]: () => loadFullPostList(page),
        [POST_LIST_TYPE.listByAuthor]: () => loadPostListByAuthor(page, authorId)
    };

    useEffect(() => {
        loadPostList[listType]();
    }, [page, authorId]);

    return (
        postListComponents[status]
    );
}

export default PostListPage;