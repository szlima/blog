import { createContext, useState } from 'react';

import { getPostListInfo } from '../utils/apiFunctions';

const initialState= {
    posts: [],
    totalPages: 1,
    currentPage: 1,
    currentAuthor: undefined,
    loadPostList: () => {}
};

const PostContext= createContext(initialState);

function PostProvider({children}){
    const [posts, setPosts]= useState([]);
    const [totalPages, setTotalPages]= useState(1);
    const [currentPage, setCurrentPage]= useState(1);
    const [currentAuthor, setCurrentAuthor]= useState(undefined);

    const loadPostList= (page=1, author) => {

        getPostListInfo(page, author)
            .then(({newTotalPages, newPosts}) => {
                setTotalPages(newTotalPages);
                setPosts(newPosts);
            }).catch(() =>
                console.error('Loading error: Post list unavailable.')
            ).finally(() => {
                setCurrentPage(page);
                setCurrentAuthor(author);
            });
    };

    return <PostContext.Provider value={{
        posts, totalPages, currentPage, currentAuthor,
        loadPostList
    }}>
        {children}
    </PostContext.Provider>
}

export {PostContext, PostProvider};