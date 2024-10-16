import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { PostContext } from '../../contexts/PostContext';

function PostAuthor(){
    const {currentPost: post}= useContext(PostContext);

    return (
        <p className='post__author'>
            <Link to={`/authors/${post.author.id}`}>{post.author.name}</Link>
        </p>
    );
}

export default PostAuthor;