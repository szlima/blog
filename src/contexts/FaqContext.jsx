import { createContext, useEffect, useState } from "react";

import { getFAQ } from '../utils/apiFunctions';
import { STATUS } from '../utils/dataInfo';

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
            }).catch(() => {
                console.error('Loading error: FAQ unavailable.');
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