import { Link } from "react-router-dom";

function Navbar(){

    return (
        <nav className='navbar'>
            <ul className='navbar__list'>
                <li className='navbar__list__item'>Menu</li>
                <li className='navbar__list__item'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='navbar__list__item'>
                    <Link to='/about'>About</Link>
                </li>
                <li className='navbar__list__item'>FAQ</li>
                <li className='navbar__list__item'>Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar;