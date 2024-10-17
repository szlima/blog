import { Navigate } from 'react-router-dom';

import { STATUS } from '../../utils/dataInfo';

import UnavailableInfo from './UnavailableInfo';
import LoadingInfo from './LoadingInfo';

function ComponentLoader({status, infoName, children}){

    const showComponents= () => {
        switch(status){
            case STATUS.completed:
                return <>{children}</>;
            case STATUS.notFound:
                return <Navigate to='/not-found'/>;
            case STATUS.unavailable:
                return <UnavailableInfo info={infoName}/>;
            case STATUS.loading:
            case STATUS.standBy:
                return <LoadingInfo />;
        }
    };

    return (
        showComponents()
    );
}

export default ComponentLoader;