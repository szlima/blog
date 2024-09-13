import { useContext } from 'react';

import PostListHeading from './PostListHeading';
import Posts from './Posts';
import Pagination from './Pagination';

import { PostContext } from '../contexts/PostContext';

function PostList(){
    const {posts}= useContext(PostContext);

    return (
        <>
            <PostListHeading />
            {
                (posts.length > 0) ?
                    <>
                        <Posts />
                        <Pagination />
                    </>
                :
                    <p className='post-list--empty'>
                        There are no publications.
                    </p>
            }
        </>
    );
}

export default PostList;