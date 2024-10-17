import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { PostContext } from '../contexts/PostContext';

import ComponentLoader from '../components/incompleteData/ComponentLoader';
import PostArea from '../components/postArea/PostArea';
import Aside from '../components/sidebar/Aside';

function PostPage(){
    const {postStatus, loadPost}= useContext(PostContext);
    const {postId}= useParams();

    useEffect(() => {
        loadPost(postId);
    }, [postId]);

    return (
        <ComponentLoader status={postStatus} infoName='Post'>
            <PostArea />
            <Aside />
        </ComponentLoader>
    );
}

export default PostPage;