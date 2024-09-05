import { useContext } from "react";

import {BlogContext} from '../contexts/BlogContext';
import {PostContext} from '../contexts/PostContext';

function Archive(){
    const {owner, authors}= useContext(BlogContext);
    const {currentAuthor, changeCurrentAuthor}= useContext(PostContext);

    const getStyleArquiveItem= author => (
        `archive__item ${
            (author === currentAuthor) ?
            'archive__item--selected' :
            ''
        }`
    );

    return (
        <div className="archive">
            <h3 className="archive__heading">Archive</h3>
            <ul className="archive__list">
                <li onClick={() => changeCurrentAuthor(owner)} className={getStyleArquiveItem(owner)}>mine</li>
                <p className="archive__subheading">my friends' posts:</p>
                {
                    authors
                        .filter(author => (author.id != owner.id))
                        .map((friend, id) => (
                            <li key={id} onClick={() => changeCurrentAuthor(friend)} className={getStyleArquiveItem(friend)}>
                                {friend.name}
                            </li>
                        ))
                }
            </ul>
        </div>
    );
}

export default Archive;