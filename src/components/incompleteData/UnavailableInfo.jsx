import { BiError } from 'react-icons/bi';

function UnavailableInfo({info}){

    return (
        <div className='unavailable-info'>
          <BiError className='icon'/>
          <p>{info} unavailable</p>
        </div>
    );
}

export default UnavailableInfo;