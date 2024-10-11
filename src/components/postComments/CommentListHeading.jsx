import { useContext } from 'react';

import { PostContext } from '../../contexts/PostContext';

function CommentListHeading(){
    const {commentList}= useContext(PostContext);

    return (
        <h3 className='comment-list__heading'>
            {`${commentList.length} comment${commentList.length == 1 ? '' : 's'}`}
        </h3>
    );
}

export default CommentListHeading;