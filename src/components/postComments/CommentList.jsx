import { useContext, useState } from 'react';

import { PostContext } from '../../contexts/PostContext';

import {STATUS} from '../../utils/dataInfo';

import LoadingInfo from '../incompleteData/LoadingInfo';
import UnavailableInfo from '../incompleteData/UnavailableInfo';
import CommentListToggleDisplay from './CommentListToggleDisplay';
import CommentListHeading from './CommentListHeading';
import Comments from './Comments';

const commentListComponents= {
    [STATUS.loading]: <LoadingInfo />,
    [STATUS.unavailable]: <UnavailableInfo info='Comment list'/>,
    [STATUS.completed]: <>
        <CommentListHeading />
        <Comments />
    </>
};

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
            {isDisplayingComments && commentListComponents[commentListStatus]}
        </div>
    );
}

export default CommentList;