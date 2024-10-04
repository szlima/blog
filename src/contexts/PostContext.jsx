import { createContext, useState } from 'react';

import { parseNaturalNumber, isEmpty } from '../utils/dataFunctions';
import { getPost } from '../utils/apiFunctions';
import { STATUS } from '../utils/dataInfo';

// ------------------------------------

const initialState= {
    postStatus: STATUS.standBy,
    currentPost: undefined,
    loadPost: () => {},
    resetPostContext: () => {}
};

const PostContext= createContext(initialState);

// ------------------------------------

function PostProvider({children}){
    const [postStatus, setPostStatus] = useState(STATUS.standBy);
    const [currentPost, setCurrentPost]= useState(undefined);

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

    const resetPostContext= () => {
        const {postStatus, currentPost}= initialState;
        setPostStatus(postStatus);
        setCurrentPost(currentPost);
    };

    return (
        <PostContext.Provider value={{
            postStatus, currentPost,
            loadPost, resetPostContext
        }}>
            {children}
        </PostContext.Provider>
    );
};

export {PostContext, PostProvider};