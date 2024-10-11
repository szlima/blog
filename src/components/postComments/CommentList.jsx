import { useState } from 'react';

import CommentListToggleDisplay from './CommentListToggleDisplay';
import CommentListHeading from './CommentListHeading';
import Comments from './Comments';

function CommentList(){
    const [isDisplayingComments, setIsDisplayingComments]= useState(false);

    const toggleDisplay= () => setIsDisplayingComments(previous => !previous);

    return (
        <div className='comment-list'>
            <CommentListToggleDisplay isDisplaying={isDisplayingComments} toToggle={toggleDisplay}/>
            {
                isDisplayingComments && <>
                    <CommentListHeading />
                    <Comments />
                </>
            }
        </div>
    );
}

export default CommentList;