import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { PostContext } from '../contexts/PostContext';

import PostArea from '../components/PostArea';
import Aside from '../components/Aside';

import { parseInteger } from '../utils/dataFunctions';

function Home(){
    const params= useParams();
    const {loadPostList}= useContext(PostContext);

    const getPage= () => parseInteger(params.page);

    useEffect(() => {
        const page= getPage();
        loadPostList(page);
    }, [params]);

    return (
        <>
            <PostArea />
            <Aside />
        </>
    );
}

export default Home;