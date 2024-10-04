
import { useContext, useEffect } from 'react';

import { PostListContext } from '../contexts/PostListContext';
import { PostContext } from '../contexts/PostContext';

import NotFoundInfo from '../components/incompleteData/NotFoundInfo';


function NoPage(){
    const {resetPostListContext}= useContext(PostListContext);
    const {resetPostContext}= useContext(PostContext);

    useEffect(() => {
        resetPostListContext();
        resetPostContext();
    }, []);

    return (
        <div className="no-page">
            <NotFoundInfo />
        </div>
    );
}

export default NoPage;