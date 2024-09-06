
import { useContext } from 'react';

import { PostContext } from '../contexts/PostContext';

import PostList from './PostList';

function PostArea(){
    const {currentAuthor, posts}= useContext(PostContext);

    return (
        <div className='post-area'>
            {currentAuthor && <h2 className='post-area__subheading'>Posts by {currentAuthor.name}</h2>}
            {
                (posts.length > 0) ?
                    <>
                        <PostList />
                        <p className='shortcut-home'>home</p>
                    </>
                :
                    <p className='post-area__no-posts'>There are no publications.</p>
            }
        </div>
    );
}

export default PostArea;