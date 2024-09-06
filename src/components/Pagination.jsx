import { PiArrowLineLeftBold, PiArrowLineRightBold } from 'react-icons/pi';

import { useContext, useState, useEffect } from 'react';

import { PostContext } from '../contexts/PostContext';

function Pagination(){
    const {totalPages, currentPage, changeCurrentPage}= useContext(PostContext);
    const [list, setList]= useState([]);

    const generateList= () => {
        let aux= [];

        if(totalPages < 5 || currentPage < 3){
            const limit= (totalPages < 5) ? totalPages : 5;
            for(let i=1; i<=limit; i++)
                aux.push(i);

        }else if(currentPage > (totalPages - 2)){
            for(let i=0; i<5; i++)
                aux.unshift(totalPages - i);

        }else{
            for(let i=currentPage-2; i<=currentPage+2; i++)
                aux.push(i);
        }

        return aux;
    };

    const isFirstPage= () => currentPage === 1;

    const isLastPage= () => currentPage === totalPages;

    useEffect(() => {
        setList(generateList());
    }, [totalPages, currentPage]);

    return (
        <div className='pagination'>
            <ul className='pagination__list'>
                <li onClick={() => changeCurrentPage(1)} className={`pagination__option 
                    ${isFirstPage() && 'pagination__option--disabled'}`}>
                    <PiArrowLineLeftBold />
                </li>
                {
                    list.map((page, id) =>
                        <li key={id} onClick={() => changeCurrentPage(page)} className={`pagination__option 
                            ${(page===currentPage) && 'pagination__option--selected'}`}>
                            {page}
                        </li>
                    )
                }
                <li onClick={() => changeCurrentPage(totalPages)} className={`pagination__option 
                    ${isLastPage() && 'pagination__option--disabled'}`}>
                    <PiArrowLineRightBold />
                </li>
            </ul>
        </div>
    );
}

export default Pagination;