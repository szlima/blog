import { createContext, useState, useEffect } from 'react';

import { getBlogData } from '../utils/apiFunctions';

// ------------------------------------
const STATUS= {
    loading: 'loading',
    unavailable: 'unavailable',
    completed: ''
};

const initialState= {
    incompleteStatus: STATUS.loading,
    blogName: '',
    blogDescription: '',
    owner: {},
    authors: []
};

const BlogContext= createContext(initialState);

// ------------------------------------

function BlogProvider({children}){
    const [incompleteStatus, setIncompleteStatus]= useState(STATUS.loading);
    const [blogName, setBlogName]= useState('');
    const [blogDescription, setBlogDescription]= useState('');
    const [owner, setOwner]= useState({});
    const [authors, setAuthors]= useState([]);

    useEffect(() => {
        loadBlogData();
    }, []);

    const loadBlogData= () => {
        getBlogData()
            .then(data => {
                setBlogName(data.blogName);
                setBlogDescription(data.blogDescription);
                setOwner(data.owner);
                setAuthors(data.authors);
                setIncompleteStatus(STATUS.completed);
            }).catch(() => {
                console.error('Loading error: Blog data unavailable.');
                setIncompleteStatus(STATUS.unavailable);
            });
    };

    return (
        <BlogContext.Provider value={{
            incompleteStatus,
            blogName, blogDescription, owner, authors
        }}>
            {children}
        </BlogContext.Provider>
    );
}

export {BlogContext, BlogProvider, STATUS};