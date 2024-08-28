
import PostList from './PostList';

function PostArea({posts}){

    return (
        <div className="post-area">
            <PostList posts={posts}/>
            <p className="shortcut-home">home</p>
        </div>
    );
}

export default PostArea;