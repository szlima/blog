import { createContext, useState, useEffect } from "react";

import { getNumberPages, getPosts } from "../utils/functions";

const owner= {
    name: 'Clementine Bauch',
    photo: 'https://picsum.photos/id/64/300?grayscale',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod dolore illo amet, doloribus voluptas, fuga aspernatur sequi deleniti, error aliquid modi laboriosam facere et! Provident ad temporibus voluptas aspernatur in.'   
};

const authors= ["Leanne Graham", "Ervin Howell", "Patricia Lebsack"];

const blogName= owner.name,
    blogDescription= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';

const initialState= {
    blogName,
    blogDescription,
    owner,
    authors,
    posts: [],
    totalPages: 1,
    currentPage: 1,
    changeCurrentPage: () => {}
};

const BlogContext= createContext(initialState);

function BlogProvider({children}){
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