import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { PostContext } from '../contexts/PostContext';

import PostArea from '../components/PostArea';
import Aside from '../components/Aside';

function Home(){
    const {page}= useParams();
    const {loadPostList}= useContext(PostContext);

    useEffect(() => {
        loadPostList(page);
    }, [page]);

    return (
        <>
            <PostArea />
            <Aside />
        </>
    );
}

export default Home;