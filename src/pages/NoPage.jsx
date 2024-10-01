
import { useContext, useEffect } from 'react';

import { PostListContext } from '../contexts/PostListContext';

import NotFoundInfo from '../components/incompleteData/NotFoundInfo';

function NoPage(){
    const {resetPostListContext}= useContext(PostListContext);

    useEffect(() => {
        resetPostListContext();
    }, []);

    return (
        <div className="no-page">
            <NotFoundInfo />
        </div>
    );
}

export default NoPage;