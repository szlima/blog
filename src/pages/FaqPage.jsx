import { useContext } from 'react';

import { FaqContext } from '../contexts/FaqContext';

import ComponentLoader from '../components/incompleteData/ComponentLoader';
import Faq from '../components/secondaryPages/Faq';

function FaqPage(){
    const {faqStatus}= useContext(FaqContext);

    return (
        <ComponentLoader status={faqStatus} infoName='FAQ'>
            <Faq />
        </ComponentLoader>
    );
}

export default FaqPage;