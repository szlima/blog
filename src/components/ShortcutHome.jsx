import { Link } from 'react-router-dom';

function ShortcutHome(){

    return (
        <p className='shortcut-home'>
            <Link to='/' className='shortcut-home__link'>home</Link>
        </p>
    );
}

export default ShortcutHome;