import { useContext } from 'react';

import { PostContext } from '../../contexts/PostContext';

import CommentArea from '../postComments/CommentArea';
import PostFooter from './PostFooter';

function FullPost(){
    const {currentPost: post}= useContext(PostContext);

    return (
        <div className='post--full'>
            <h2 className='post__heading'>{post.heading}</h2>
            <p className='post__content post__content--full'>{post.firstContent}</p>
            {post.image && <img className='post__image' src={post.image} alt='Post image'/>}
            {
                post.anotherContent.map((content, id) =>
                    <p key={id} className='post__content post__content--full'>{content}</p>
                )
            }
            <PostFooter />
            <CommentArea />
        </div>
    );
}

export default FullPost;