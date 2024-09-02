import { useContext } from 'react';

import PostPreview from './PostPreview';

import { PostContext } from '../contexts/PostContext';

function Posts(){
    const {posts}= useContext(PostContext);

    return (
        <div className="posts">
            {
                posts.map((post, id) => <PostPreview key={id} post={post}/>)
            }
        </div>
    );
}

export default Posts;