import { useContext } from "react";

import { PostContext } from "../contexts/PostContext";

function PostListHeading(){
    const {currentAuthor}= useContext(PostContext);

    return (
        currentAuthor ?
            <h2 className='post-list__heading'>
                Posts by {currentAuthor.name}
            </h2>
        :
            ''
    );
}

export default PostListHeading;