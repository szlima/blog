
import { useContext, useEffect } from 'react';

import { PostContext } from '../contexts/PostContext';

import NotFoundInfo from '../components/incompleteData/NotFoundInfo';

function NoPage(){
    const {resetPostContext}= useContext(PostContext);

    useEffect(() => {
        resetPostContext();
    }, []);

    return (
        <div className="no-page">
            <NotFoundInfo />
        </div>
    );
}

export default NoPage;