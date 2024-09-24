import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PiArrowLineLeftBold, PiArrowLineRightBold } from 'react-icons/pi';

import { PostContext } from '../contexts/PostContext';

function Pagination(){
    const navigate= useNavigate();
    const {totalPages, currentPage, currentAuthor}= useContext(PostContext);
    const [list, setList]= useState([]);

    useEffect(() => {
        setList(generateList());
    }, [totalPages, currentPage]);

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

    const isCurrentPage= page => page == currentPage;

    const isFirstPage= () => currentPage == 1;

    const isLastPage= () => currentPage == totalPages;

    const handleChangePage= page => {
        if(!isCurrentPage(page))
            navigate(`/${currentAuthor ? `authors/${currentAuthor.id}/` : ''}${page}`);
    };

    return (
        <div className='pagination'>
            <ul className='pagination__list'>
                <li onClick={() => handleChangePage(1)} className={`pagination__option 
                    ${isFirstPage() && 'pagination__option--disabled'}`}>
                    <PiArrowLineLeftBold />
                </li>
                {
                    list.map((page, id) =>
                        <li key={id} onClick={() => handleChangePage(page)} className={`pagination__option 
                            ${isCurrentPage(page) && 'pagination__option--selected'}`}>
                            {page}
                        </li>
                    )
                }
                <li onClick={() => handleChangePage(totalPages)} className={`pagination__option 
                    ${isLastPage() && 'pagination__option--disabled'}`}>
                    <PiArrowLineRightBold />
                </li>
            </ul>
        </div>
    );
}

export default Pagination;