import { createContext, useState, useEffect } from 'react';

import {
    getBlogData, getUsers
} from '../utils/apiFunctions';

// ------------------------------------

const initialState= {
    blogName: '',
    blogDescription: '',
    owner: {},
    authors: []
};

const BlogContext= createContext(initialState);

// ------------------------------------

function BlogProvider({children}){
    const [blogName, setBlogName]= useState('');
    const [blogDescription, setBlogDescription]= useState('');
    const [owner, setOwner]= useState({});
    const [authors, setAuthors]= useState([]);

    useEffect(() => {
        loadBlogData();
        loadAuthorList();
    }, []);

    const loadBlogData= () => {
        getBlogData()
            .then(data => {
                setBlogName(data.blogName);
                setBlogDescription(data.blogDescription);
                setOwner(data.owner);
            }).catch(() =>
                console.error('Loading error: Blog data unavailable.')
            );
    };

    const loadAuthorList= () => {
        getUsers()
            .then(data => setAuthors(data))
            .catch(() => console.error('Loading error: Authors list unavailable.'));
    };

    return (
        <BlogContext.Provider value={{
            blogName, blogDescription, owner, authors
        }}>
            {children}
        </BlogContext.Provider>
    );
}

export {BlogContext, BlogProvider};