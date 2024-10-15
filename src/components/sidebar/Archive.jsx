import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import {getUnavailabilityClass} from '../../utils/dataFunctions';

import {BlogContext} from '../../contexts/BlogContext';
import {PostListContext} from '../../contexts/PostListContext';

function Archive(){
    const navigate= useNavigate();
    const {owner, authors}= useContext(BlogContext);
    const {currentAuthor}= useContext(PostListContext);

    const unavailabilityClass= getUnavailabilityClass([owner, authors]);

    const getStyleArquiveItem= author => (
        `archive__item ${
            (author.id === currentAuthor?.id) ?
            'archive__item--selected' :
            ''
        }`
    );

    const handleChangeAuthor= author => navigate(`/authors/${author.id}`);

    return (
        <div className={`archive ${unavailabilityClass}`}>
            <h3 className='archive__heading'>Archive</h3>
            <ul className='archive__list'>
                <li onClick={() => handleChangeAuthor(owner)} className={getStyleArquiveItem(owner)}>mine</li>
                <p className='archive__subheading'>my friends' posts:</p>
                {
                    authors
                        .filter(author => (author.id != owner.id))
                        .map((friend, id) => (
                            <li key={id} onClick={() => handleChangeAuthor(friend)} className={getStyleArquiveItem(friend)}>
                                {friend.name}
                            </li>
                        ))
                }
            </ul>
        </div>
    );
}

export default Archive;