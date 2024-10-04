import { Link } from 'react-router-dom';

function Navbar(){

    const toggleMenu= e =>
        e.target.parentElement.classList.toggle('navbar__list--active');

    const closeMenu= e =>
        e.target.parentNode.parentNode.classList.remove('navbar__list--active');

    return (
        <nav className='navbar'>
            <ul className='navbar__list'>
                <li className='navbar__list__item' onClick={toggleMenu}>Menu</li>
                <li className='navbar__list__item' onClick={closeMenu}>
                    <Link to='/'>Home</Link>
                </li>
                <li className='navbar__list__item' onClick={closeMenu}>
                    <Link to='/about'>About</Link>
                </li>
                <li className='navbar__list__item' onClick={closeMenu}>
                    <Link to='/faq'>FAQ</Link>
                </li>
                <li className='navbar__list__item' onClick={closeMenu}>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;