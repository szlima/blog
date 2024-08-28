
import PostList from './PostList';

function PostArea({posts}){

    return (
        <div className="post-area">
            <PostList posts={posts}/>
        </div>
    );
}

export default PostArea;