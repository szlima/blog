import { useContext } from 'react';

import {PostContext} from '../../contexts/PostContext';

import Comment from './Comment';

function Comments(){
    const {commentList}= useContext(PostContext);

    return (
        <div className='comments'>
            {
                commentList.map((comment, i) =>
                    <Comment key={i} message={comment}/>
                )
            }
        </div>
    );
}

export default Comments;