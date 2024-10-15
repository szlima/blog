import { useContext } from 'react';

import { BlogContext } from '../../contexts/BlogContext';

function About(){
    const {owner}= useContext(BlogContext);

    return (
        <div className='about'>
            <img className='about__photo' src={owner.bigPhoto} alt='About photo'/>
            <div className='about__text'>
                <p className='about__paragraph'>
                    {owner.description} {owner.description}
                </p>
                <p className='about__paragraph'>
                    {owner.description}
                </p>
                <p className='about__paragraph'>
                {owner.description} {owner.description} {owner.description}
                </p>
            </div>
        </div>
    );
}

export default About;