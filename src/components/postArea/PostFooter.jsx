
import PostAuthor from './PostAuthor';
import ShareBar from './ShareBar';

function PostFooter(){

    return (
        <div className='post__footer'>
            <PostAuthor />
            <ShareBar />
        </div>        
    );
}

export default PostFooter;