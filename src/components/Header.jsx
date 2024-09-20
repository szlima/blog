import { useContext } from 'react';
import { Link } from 'react-router-dom';

import {getUnavailabilityClass} from '../utils/dataFunctions';

import { BlogContext } from '../contexts/BlogContext';

function Header(){
    const {blogName, blogDescription}= useContext(BlogContext);

    const unavailabilityClass= getUnavailabilityClass([blogName, blogDescription]);

    return (
        <header className={`header ${unavailabilityClass}`}>
            <h1 className='header__heading'>
                <Link to='/'>{blogName}</Link>
            </h1>
            <p className='header__description'>{blogDescription}</p>
        </header>
    );
}

export default Header;