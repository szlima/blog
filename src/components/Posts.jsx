
import PostPreview from './PostPreview';

function Posts({list}){

    return (
        <div className="posts">
            {
                list.map((post, id) => <PostPreview key={id} post={post}/>)
            }
        </div>
    );
}

export default Posts;