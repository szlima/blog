import { useContext } from 'react';
import { FaWhatsapp, FaLink } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import { PostContext } from '../../contexts/PostContext';

function ShareBar(){
    const {currentPost: post}= useContext(PostContext);
    const {href: link}= window.location;

    const getWhatsappHref= () => {
        return `https://wa.me/?text=${post.author.name} has written a nice post! You can read \"${post.heading}\" here: ${link}`;
    };

    const getEmailHref= () => {
        return `mailto:?subject=${post.heading}&body=${post.author.name} has written that nice post. Click the link and read it! (${link})`;
    };

    const getLinkHref= () => navigator.clipboard.writeText(link);


    return (
        <ul className='share-bar'>
            <li className='share-bar__option'>
                share:
            </li>
            <li className='share-bar__option'>
                <a href={getWhatsappHref()} target='_blank' className='share-bar__link'>
                    <FaWhatsapp />
                </a>
            </li>
            <li className='share-bar__option'>
                <a href={getEmailHref()} className='share-bar__link'>
                    <MdEmail />
                </a>
            </li>
            <li className='share-bar__option'>
                <span onClick={getLinkHref} className='share-bar__link'>
                    <FaLink />
                </span>
            </li>
        </ul>
    );
}

export default ShareBar;