import { createContext, useContext, useState } from 'react';

import { getPostListInfo } from '../utils/apiFunctions';
import { parseNaturalNumber } from '../utils/dataFunctions';
import { STATUS } from '../utils/dataInfo';

import { BlogContext } from './BlogContext';

// ------------------------------------

const initialState= {
    postListStatus: STATUS.standBy,
    posts: [],
    totalPages: 1,
    currentPage: 1,
    currentAuthor: undefined,
    loadFullPostList: () => {},
    loadPostListByAuthor: () => {},
    resetPostListContext: () => {}
};

const PostListContext= createContext(initialState);

// ------------------------------------

function PostListProvider({children}){
    const {getAuthor}= useContext(BlogContext);
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

    const loadFullPostList= (chosenPage=1) => {
        setPostListStatus(STATUS.loading);
        const page= parseNaturalNumber(chosenPage);

        if(!page){
            setPostListStatus(STATUS.notFound);
            return;
        }

        changePostList(page);
    };

    const loadPostListByAuthor= (chosenPage=1, authorId) => {
        setPostListStatus(STATUS.loading);
        const page= parseNaturalNumber(chosenPage);
        const author= getAuthor(authorId);

        if(!page || !author){
            setPostListStatus(STATUS.notFound);
            return;
        }

        changePostList(page, author);
    };

    const resetPostListContext= () => {
        setPostListStatus(STATUS.standBy);
        setPosts([]);
        setTotalPages(1);
        setCurrentPage(1);
        setCurrentAuthor(undefined);
    };

    return <PostListContext.Provider value={{
        postListStatus,
        posts, totalPages, currentPage, currentAuthor,
        loadFullPostList, loadPostListByAuthor, resetPostListContext
    }}>
        {children}
    </PostListContext.Provider>
}

export {PostListContext, PostListProvider};