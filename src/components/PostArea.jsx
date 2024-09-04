
import { useContext } from 'react';

import { PostContext } from '../contexts/PostContext';

import PostList from './PostList';

function PostArea(){
    const {currentAuthor}= useContext(PostContext);

    return (
        <div className="post-area">
            {currentAuthor && <h2 className='post-area__subheading'>Posts by {currentAuthor.name}</h2>}
            <PostList />
            <p className="shortcut-home">home</p>
        </div>
    );
}

export default PostArea;