import { useContext } from 'react';

import { FaqContext } from '../contexts/FaqContext';

import { STATUS } from '../utils/dataInfo';

import Faq from '../components/secondaryPages/Faq';
import LoadingInfo from '../components/incompleteData/LoadingInfo';
import UnavailableInfo from '../components/incompleteData/UnavailableInfo';

const faqComponents= {
    [STATUS.completed]: <Faq />,
    [STATUS.unavailable]: <UnavailableInfo info='FAQ'/>,
    [STATUS.loading]: <LoadingInfo />
};

function FaqPage(){
    const {faqStatus}= useContext(FaqContext);

    return (
        faqComponents[faqStatus]
    );
}

export default FaqPage;