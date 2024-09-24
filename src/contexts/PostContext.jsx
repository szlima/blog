import { createContext, useState } from 'react';

import { getPostListInfo } from '../utils/apiFunctions';
import { parseNaturalNumber } from '../utils/dataFunctions';
import { STATUS } from '../utils/dataInfo';

const initialState= {
    postListStatus: STATUS.standBy,
    posts: [],
    totalPages: 1,
    currentPage: 1,
    currentAuthor: undefined,
    loadPostList: () => {},
    resetPostContext: () => {}
};

const PostContext= createContext(initialState);

function PostProvider({children}){
    const [postListStatus, setPostListStatus]= useState(STATUS.standBy);
    const [posts, setPosts]= useState([]);
    const [totalPages, setTotalPages]= useState(1);
    const [currentPage, setCurrentPage]= useState(1);
    const [currentAuthor, setCurrentAuthor]= useState(undefined);

    const validateLoading= (numberPage, maxPages) => {
        if(numberPage > maxPages)
            setPostListStatus(STATUS.notFound);
        else
            setPostListStatus(STATUS.completed);
    };

    const changePostList= (page, author) => {

        getPostListInfo(page, author)
            .then(({newTotalPages, newPosts}) => {
                setTotalPages(newTotalPages);
                setPosts(newPosts);
                validateLoading(page, newTotalPages);
            }).catch(() => {
                console.error('Loading error: Post list unavailable.');
                setPostListStatus(STATUS.unavailable);
            }).finally(() => {
                setCurrentPage(page);
                setCurrentAuthor(author);
            });
    };

    const loadPostList= (chosenPage=1, author) => {
        setPostListStatus(STATUS.loading);
        const page= parseNaturalNumber(chosenPage);

        if(!page){
            setPostListStatus(STATUS.notFound);
            return;
        }

        changePostList(page, author);
    };

    const resetPostContext= () => {
        const {
            postListStatus, posts, totalPages, currentPage, currentAuthor
        }= initialState;

        setPostListStatus(postListStatus);
        setPosts(posts);
        setTotalPages(totalPages);
        setCurrentPage(currentPage);
        setCurrentAuthor(currentAuthor);
    };

    return <PostContext.Provider value={{
        postListStatus,
        posts, totalPages, currentPage, currentAuthor,
        loadPostList, resetPostContext
    }}>
        {children}
    </PostContext.Provider>
}

export {PostContext, PostProvider};