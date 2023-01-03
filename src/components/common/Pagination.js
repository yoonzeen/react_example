import React, { useEffect, useState } from 'react';

const Pagination = ({ selectedMenu, pIndex, setPIndex, showingSize, total }) => {
    const [pageList, setPageList] = useState([1, 2, 3, 4, 5]);
    const lastPageIndex = Math.ceil(total / 5);
    const lastPageRange = Math.ceil(total / showingSize / 10) * 2;
    const pagingFast = (way) => {
        if (way === 'prev') showingSize = showingSize * (-1);
        if (pIndex + showingSize > lastPageIndex) {
            setPIndex(lastPageIndex);
        } else {
            setPIndex(pIndex + showingSize);
        }
        setPageList(pageList.map((el) => el + showingSize));
    };
    useEffect(() => {
        setPageList([1, 2, 3, 4, 5]);
    }, [selectedMenu]);
    return (
        <div className='pagination'>
            <span className={`prev ${pIndex < 6 ? 'hidden' : ''}`} onClick={() => pagingFast('prev')}>&lt;</span>
            {
                pageList.map((el) => <span key={el} onClick={() => setPIndex(el)} className={`num ${el === pIndex ? 'on': ''} ${el > lastPageIndex ? 'hidden' : ''}`}>{el}</span>)
            }
            <span className={`next ${ Math.ceil(pIndex / 5) === lastPageRange ? 'hidden' : ''}`} onClick={() => pagingFast('next')}>&gt;</span>
        </div>
    );
};

export default Pagination;