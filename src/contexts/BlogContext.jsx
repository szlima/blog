import { createContext, useState, useEffect } from 'react';

import { getBlogData } from '../utils/apiFunctions';
import { showErrorMessage } from '../utils/dataFunctions';
import { DATA_TYPE, ERROR_TYPE, STATUS } from '../utils/dataInfo';

// ------------------------------------

const initialState= {
    blogDataStatus: STATUS.loading,
    blogName: '',
    blogDescription: '',
    owner: {},
    authors: [],
    getAuthor: () => {}
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
            }).catch(e => {
                showErrorMessage(e, ERROR_TYPE.loading, DATA_TYPE.blogData);
                setBlogDataStatus(STATUS.unavailable);
            });
    };

    const getAuthor= authorId => authors.find(author => (author.id == authorId));

    return (
        <BlogContext.Provider value={{
            blogDataStatus,
            blogName, blogDescription, owner, authors,
            getAuthor
        }}>
            {children}
        </BlogContext.Provider>
    );
}

export {BlogContext, BlogProvider};