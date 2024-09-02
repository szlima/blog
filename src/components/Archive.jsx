import { useContext } from "react";

import {BlogContext} from '../contexts/BlogContext';

function Archive(){
    const {owner, authors}= useContext(BlogContext);

    const loadPostsByAuthor= id => {};

    return (
        <div className="archive">
            <h3 className="archive__heading">Archive</h3>            
            <ul className="archive__list">
                <li onClick={() => loadPostsByAuthor(owner.id)} className="archive__item archive__item--author">mine</li>
                <p className="archive__subheading">my friends' posts:</p>
                {
                    authors.map((author, id) => (author.name != owner.name) &&
                        <li key={id} onClick={() => loadPostsByAuthor(author.id)} className="archive__item">
                            {author.name}
                        </li>)
                }
            </ul>
        </div>
    );
}

export default Archive;