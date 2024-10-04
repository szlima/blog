import { useParams } from 'react-router-dom';

import FullPost from './FullPost';
import PostList from './PostList';
import ShortcutHome from './ShortcutHome';

function PostArea(){
const {postId}= useParams();

    return (
        <div className='post-area'>
            {
                postId ? <FullPost /> : <PostList />
            }
            <ShortcutHome />
        </div>
    );
}

export default PostArea;