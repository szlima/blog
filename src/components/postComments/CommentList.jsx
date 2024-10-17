import { useContext, useState } from 'react';

import { PostContext } from '../../contexts/PostContext';

import { STATUS } from '../../utils/dataInfo';

import ComponentLoader from '../incompleteData/ComponentLoader';
import CommentListToggleDisplay from './CommentListToggleDisplay';
import CommentListHeading from './CommentListHeading';
import Comments from './Comments';

function CommentList(){
    const {commentListStatus, loadComments}= useContext(PostContext);
    const [isDisplayingComments, setIsDisplayingComments]= useState(false);

    const loadCommentList= () => {
        if(commentListStatus == STATUS.standBy)
            loadComments();
    };

    const toggleDisplay= () => {
        loadCommentList();
        setIsDisplayingComments(previous => !previous);
    };

    return (
        <div className='comment-list'>
            <CommentListToggleDisplay isDisplaying={isDisplayingComments} toToggle={toggleDisplay}/>
            {
                isDisplayingComments &&
                <ComponentLoader status={commentListStatus} infoName='Comment list'>
                    <CommentListHeading />
                    <Comments />
                </ComponentLoader>
            }
        </div>
    );
}

export default CommentList;