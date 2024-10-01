import { useContext } from 'react';

import { FaqContext } from '../contexts/FaqContext';

function Faq(){
    const {faq}= useContext(FaqContext);

    return (
        <div className='faq'>
            <h2 className='faq__heading'>
                FAQ
            </h2>

            <ol className='faq__list'>
                {
                    faq.map((faqItem, i) => 
                        <li className='faq__list__item' key={i}>
                            <div className='faq__question'>
                                {faqItem.question}
                            </div>
                            <div className='faq__answer'>
                                {faqItem.answer}
                            </div>
                        </li>
                    )
                }
            </ol>
        </div>
    );
}

export default Faq;