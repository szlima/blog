import { createContext, useState, useEffect } from "react";

import {
    getPosts, getInitialPostsInfo
} from "../utils/functions";

const initialState= {
    posts: [],
    totalPages: 1,
    currentPage: 1,
    currentAuthor: undefined,
    changeCurrentPage: () => {},
    changeCurrentAuthor: () => {}
};

const PostContext= createContext(initialState);

function PostProvider({children}){
    const [posts, setPosts]= useState([]);
    const [totalPages, setTotalPages]= useState(1);
    const [currentPage, setCurrentPage]= useState(1);
    const [currentAuthor, setCurrentAuthor]= useState(undefined);

    useEffect(() => {
        loadPostList();
    }, []);

    const changeCurrentPage= page => {

        getPosts(page, currentAuthor)
            .then(data => {
                setPosts(data);
                setCurrentPage(page);
            }).catch(() =>
                console.error('Loading error: Post list unavailable.')
            );
    };

    const changeCurrentAuthor= author => {
        setCurrentAuthor(author);
        loadPostList(author);
    };

    const loadPostList= author => {

        getInitialPostsInfo(author)
            .then(({newCurrentPage, newTotalPages, newPosts}) => {
                setCurrentPage(newCurrentPage);
                setTotalPages(newTotalPages);
                setPosts(newPosts);

            }).catch(() =>
                console.error('Loading error: Post list unavailable.')
            );
    };

    return <PostContext.Provider value={{
        posts, totalPages, currentPage, currentAuthor,
        changeCurrentPage, changeCurrentAuthor
    }}>
        {children}
    </PostContext.Provider>
}

export {PostContext, PostProvider};