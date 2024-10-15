import { useContext } from 'react';

import {getUnavailabilityClass} from '../../utils/dataFunctions';

import { BlogContext } from '../../contexts/BlogContext';

function Profile(){
    const {owner}= useContext(BlogContext);

    const unavailabilityClass= getUnavailabilityClass([owner]);

    return (
        <aside className={`profile ${unavailabilityClass}`}>
            <img className='profile__photo' src={owner.smallPhoto} alt='Profile photo'/>
            <p className='profile__description'>{owner.description}</p>
        </aside>
    );
}

export default Profile;

