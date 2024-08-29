import { useContext } from 'react';

import PostPreview from './PostPreview';

import { BlogContext } from '../contexts/BlogContext';

function Posts(){
    const {posts}= useContext(BlogContext);

    return (
        <div className="posts">
            {
                posts.map((post, id) => <PostPreview key={id} post={post}/>)
            }
        </div>
    );
}

export default Posts;