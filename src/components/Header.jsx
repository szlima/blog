import { useContext } from 'react';

import {getUnavailabilityClass} from '../utils/dataFunctions';

import { BlogContext } from '../contexts/BlogContext';

function Header(){
    const {blogName, blogDescription}= useContext(BlogContext);

    const unavailabilityClass= getUnavailabilityClass([blogName, blogDescription]);

    return (
        <header className={`header ${unavailabilityClass}`}>
            <h1 className='header__heading'>{blogName}</h1>
            <p className='header__description'>{blogDescription}</p>
        </header>
    );
}

export default Header;