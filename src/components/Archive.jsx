import { useContext } from "react";

import {BlogContext} from '../contexts/BlogContext';

function Archive(){
    const {owner, authors}= useContext(BlogContext);

    return (
        <div className="archive">
            <h3 className="archive__heading">Archive</h3>            
            <ul className="archive__list">
                <li className="archive__item archive__item--author">mine</li>
                <p className="archive__subheading">my friends' posts:</p>
                {
                    authors.map((author, id) => (author != owner.name) &&
                        <li key={id} className="archive__item">{author}</li>)
                }
            </ul>
        </div>
    );
}

export default Archive;