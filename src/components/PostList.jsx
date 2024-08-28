
import Posts from './Posts';
import Pagination from './Pagination';

const currentPage= 3;
const totalPages= 10;

function PostList({posts}){

    return (
        <>
            <Posts list={posts}/>
            <Pagination currentPage={currentPage} totalPages={totalPages}/>
        </>
    );
}

export default PostList;