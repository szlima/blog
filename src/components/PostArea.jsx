
import PostList from './PostList';
import ShortcutHome from './ShortcutHome';

function PostArea(){

    return (
        <div className='post-area'>
            <PostList />
            <ShortcutHome />
        </div>
    );
}

export default PostArea;