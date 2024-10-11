
import CommentList from './CommentList';
import CommentForm from './CommentForm';

function CommentArea(){

    return (
        <div className='comment-area'>
            <CommentList />
            <CommentForm />
        </div>
    );
}

export default CommentArea;