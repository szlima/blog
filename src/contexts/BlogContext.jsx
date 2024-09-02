import { createContext, useState, useEffect } from "react";

import {
    getNumberPages, getPosts, getBlogData, getUsers
} from "../utils/functions";

// ------------------------------------

const initialState= {
    blogName: '',
    blogDescription: '',
    owner: {},
    authors: [],
    posts: [],
    totalPages: 1,
    currentPage: 1,
    changeCurrentPage: () => {}
};

const BlogContext= createContext(initialState);

// ------------------------------------

function BlogProvider({children}){
    const [owner, setOwner]= useState({});
    const [authors, setAuthors]= useState([]);
    const [blogName, setBlogName]= useState('');
    const [blogDescription, setBlogDescription]= useState('');
    const [posts, setPosts]= useState([]);
    const [totalPages, setTotalPages]= useState(1);
    const [currentPage, setCurrentPage]= useState(1);

    useEffect(() => {

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

        getBlogData()
            .then(data => {
                setOwner(data.owner);
                setBlogName(data.blogName);
                setBlogDescription(data.blogDescription);
            }).catch(() =>
                console.error('Loading error: Blog data unavailable.')
            );

        getUsers()
            .then(data => setAuthors(data))
            .catch(() => console.error('Loading error: Authors list unavailable.'));

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

    return (
        <BlogContext.Provider value={{
            blogName, blogDescription, owner,
            authors, posts, totalPages, currentPage,
            changeCurrentPage
        }}>
            {children}
        </BlogContext.Provider>
    );
}

export {BlogContext, BlogProvider};