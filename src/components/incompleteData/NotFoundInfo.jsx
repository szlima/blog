import { TbFaceIdError } from 'react-icons/tb';

function NotFoundInfo(){

    return (
        <>
            <TbFaceIdError className='icon'/>
            <p>Page not found</p>
        </>
    );
}

export default NotFoundInfo;