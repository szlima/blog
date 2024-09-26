import { useContext } from 'react';
import { RiMailLine, RiTwitterXFill } from 'react-icons/ri';
import {
    FaPhone, FaYoutube, FaInstagram, FaTiktok
} from 'react-icons/fa';

import { BlogContext } from '../contexts/BlogContext';

function Contact(){
    const {owner}= useContext(BlogContext);

    return (
        <div className='contact'>
            <h2 className='contact__heading'>
                Contact
            </h2>

            <div className='contact__phone'>
                <a href={`tel:${owner.phone}`} className='contact__link'>
                    <FaPhone />
                </a>
                <div className='contact__info'>
                    {owner.phone}
                </div>
            </div>

            <div className='contact__email'>
                <a href={`mailto:${owner.email}`} className='contact__link'>
                    <RiMailLine />
                </a>
                <div className='contact__info'>
                    {owner.email}
                </div>
            </div>

            <div className='contact__social-media'>
                <a href='#' className='contact__link' target='_blank'>
                    <FaYoutube />
                </a>
                <a href='#' className='contact__link' target='_blank'>
                    <FaTiktok />
                </a>
                <a href='#' className='contact__link' target='_blank'>
                    <RiTwitterXFill />
                </a>
                <a href='#' className='contact__link' target='_blank'>
                    <FaInstagram />
                </a>
            </div>
        </div>
    );
}

export default Contact;