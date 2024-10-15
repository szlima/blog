import { createContext, useState } from 'react';

import { parseNaturalNumber, isEmpty } from '../utils/dataFunctions';
import { getPost, getComments, sendComment } from '../utils/apiFunctions';
import { STATUS } from '../utils/dataInfo';

// ------------------------------------

const initialState= {
    postStatus: STATUS.standBy,
    commentListStatus: STATUS.standBy,
    newCommentStatus: STATUS.standBy,
    currentPost: undefined,
    commentList: [],
    loadPost: () => {},
    loadComments: () => {},
    resetPostContext: () => {},
    resetNewCommentStatus: () => {},
    sendNewComment: () => {}
};

const PostContext= createContext(initialState);

// ------------------------------------

function PostProvider({children}){
    const [postStatus, setPostStatus] = useState(STATUS.standBy);
    const [commentListStatus, setCommentListStatus] = useState(STATUS.standBy);
    const [newCommentStatus, setNewCommentStatus] = useState(STATUS.standBy);
    const [currentPost, setCurrentPost]= useState(undefined);
    const [commentList, setCommentList]= useState([]);

    const validateLoading= post => {
        if(isEmpty(post))
            setPostStatus(STATUS.unavailable);
        else
            setPostStatus(STATUS.completed);
    };

    const changeCurrentPost= postId => {

        getPost(postId)
            .then(data => {
                setCurrentPost(data);
                validateLoading(data);
            }).catch(() => {
                console.error('Loading error: Post unavailable.');
                setPostStatus(STATUS.unavailable);
            });
    };

    const loadPost= chosenPostId => {
        setPostStatus(STATUS.loading);
        const postId= parseNaturalNumber(chosenPostId);

        if(!postId){
            setPostStatus(STATUS.notFound);
            return;
        }

        changeCurrentPost(postId);
    };

    const loadComments= () => {
        setCommentListStatus(STATUS.loading);

        getComments(currentPost.id)
            .then(data => {
                const comments= data.concat(commentList);
                setCommentList(comments);
                setCommentListStatus(STATUS.completed);
            }).catch(() => {
                console.error('Loading error: Comment list unavailable.');
                setCommentListStatus(STATUS.unavailable);
            });
    };

    const resetPostContext= () => {
        setPostStatus(STATUS.standBy);
        setCommentListStatus(STATUS.standBy);
        setNewCommentStatus(STATUS.standBy);
        setCurrentPost(undefined);
        setCommentList([]);
    };

    const resetNewCommentStatus= () => setNewCommentStatus(STATUS.standBy);

    const sendNewComment= comment => {
        setNewCommentStatus(STATUS.loading);

        sendComment(currentPost.id, comment)
            .then(data => {
                const comments= commentList;
                comments.push(data);
                setCommentList(comments);
                setNewCommentStatus(STATUS.completed);
            }).catch(() => {
                console.error('Submission error: Comment not sent.');
                setNewCommentStatus(STATUS.unavailable);
            });
    };

    return (
        <PostContext.Provider value={{
            postStatus, commentListStatus, newCommentStatus,
            currentPost, commentList, loadPost, loadComments,
            resetPostContext, resetNewCommentStatus, sendNewComment
        }}>
            {children}
        </PostContext.Provider>
    );
};

export {PostContext, PostProvider};