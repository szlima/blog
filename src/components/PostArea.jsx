
import { useContext } from 'react';
import { Link } from 'react-router-dom';

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
                        <p className='shortcut-home'>
                            <Link to='/' className='shortcut-home__link'>home</Link>
                        </p>
                    </>
                :
                    <p className='post-area__no-posts'>There are no publications.</p>
            }
        </div>
    );
}

export default PostArea;