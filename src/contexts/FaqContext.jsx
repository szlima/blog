import { createContext, useEffect, useState } from "react";

import { getFAQ } from '../utils/apiFunctions';
import { showErrorMessage } from '../utils/dataFunctions';
import { DATA_TYPE, ERROR_TYPE, STATUS } from '../utils/dataInfo';

// ------------------------------------

const initialState= {
    faqStatus: STATUS.loading,
    faq: []
};

const FaqContext= createContext(initialState);

// ------------------------------------

function FaqProvider({children}){
    const [faqStatus, setFaqStatus]= useState(STATUS.loading);
    const [faq, setFaq]= useState([]);

    useEffect(() => {
        getFAQ()
            .then(data => {
                setFaq(data);
                setFaqStatus(STATUS.completed);
            }).catch(e => {
                showErrorMessage(e, ERROR_TYPE.loading, DATA_TYPE.faq);
                setFaqStatus(STATUS.unavailable);
            });
    }, []);

    return (
        <FaqContext.Provider value={{faqStatus, faq}}>
            {children}
        </FaqContext.Provider>
    );
}

export {FaqContext, FaqProvider};