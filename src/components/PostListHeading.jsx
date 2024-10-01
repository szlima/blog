import { useContext } from "react";

import { PostListContext } from "../contexts/PostListContext";

function PostListHeading(){
    const {currentAuthor}= useContext(PostListContext);

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