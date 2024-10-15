import { useContext } from 'react';

import PostPreview from './PostPreview';

import { PostListContext } from '../../contexts/PostListContext';

function Posts(){
    const {posts}= useContext(PostListContext);

    return (
        <div className='posts'>
            {
                posts.map((post, id) => <PostPreview key={id} post={post}/>)
            }
        </div>
    );
}

export default Posts;