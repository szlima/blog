import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { POST_LIST_TYPE } from '../utils/dataInfo';

import { PostListContext } from '../contexts/PostListContext';

import ComponentLoader from '../components/incompleteData/ComponentLoader';
import PostArea from '../components/postArea/PostArea';
import Aside from '../components/sidebar/Aside';

function PostListPage({listType}){
    const {page, authorId}= useParams();
    const {loadFullPostList, loadPostListByAuthor, postListStatus}= useContext(PostListContext);

    const loadPostList= {
        [POST_LIST_TYPE.fullList]: () => loadFullPostList(page),
        [POST_LIST_TYPE.listByAuthor]: () => loadPostListByAuthor(page, authorId)
    };

    useEffect(() => {
        loadPostList[listType]();
    }, [page, authorId]);

    return (
        <ComponentLoader status={postListStatus} infoName='Post list'>
            <PostArea />
            <Aside />
        </ComponentLoader>
    );
}

export default PostListPage;