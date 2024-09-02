import { createContext, useState, useEffect } from "react";

import {
    getNumberPages, getPosts
} from "../utils/functions";

const initialState= {
    posts: [],
    totalPages: 1,
    currentPage: 1,
    changeCurrentPage: () => {}
};

const PostContext= createContext(initialState);

function PostProvider({children}){
    const [posts, setPosts]= useState([]);
    const [totalPages, setTotalPages]= useState(1);
    const [currentPage, setCurrentPage]= useState(1);

    useEffect(() => {
        loadPostList();
    }, []);

    const changeCurrentPage= page => {

        getPosts(page)
            .then(data => {
                setPosts(data);
                setCurrentPage(page);
            }).catch(() =>
                console.error('Loading error: Post list unavailable.')
            );
    };

    const loadPostList= () => {
        getNumberPages()
            .then(data => setTotalPages(data))
            .catch(() =>
                console.error('Loading error: Number of pages unavailable.')
            );

        getPosts(currentPage)
            .then(data => setPosts(data))
            .catch(() =>
                console.error('Loading error: Post list unavailable.')
            );
    };

    return <PostContext.Provider value={{
        posts, totalPages, currentPage, changeCurrentPage
    }}>
        {children}
    </PostContext.Provider>
}

export {PostContext, PostProvider};