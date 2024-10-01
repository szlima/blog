import { useContext } from 'react';

import PostListHeading from './PostListHeading';
import Posts from './Posts';
import Pagination from './Pagination';

import { PostListContext } from '../contexts/PostListContext';

function PostList(){
    const {posts}= useContext(PostListContext);

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