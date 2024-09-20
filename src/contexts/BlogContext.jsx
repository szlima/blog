import { createContext, useState, useEffect } from 'react';

import { getBlogData } from '../utils/apiFunctions';
import { STATUS } from '../utils/dataInfo';

// ------------------------------------

const initialState= {
    blogDataStatus: STATUS.loading,
    blogName: '',
    blogDescription: '',
    owner: {},
    authors: []
};

const BlogContext= createContext(initialState);

// ------------------------------------

function BlogProvider({children}){
    const [blogDataStatus, setBlogDataStatus]= useState(STATUS.loading);
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
                setBlogDataStatus(STATUS.completed);
            }).catch(() => {
                console.error('Loading error: Blog data unavailable.');
                setBlogDataStatus(STATUS.unavailable);
            });
    };

    return (
        <BlogContext.Provider value={{
            blogDataStatus,
            blogName, blogDescription, owner, authors
        }}>
            {children}
        </BlogContext.Provider>
    );
}

export {BlogContext, BlogProvider};