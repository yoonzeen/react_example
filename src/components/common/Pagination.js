import React, { useState } from 'react';

const Pagination = ({ pIndex, setPIndex, pSize, total }) => {
    const [pageList, setPageList] = useState([1, 2, 3, 4, 5]);
    const lastPageIndex = Math.ceil(total / 5);
    const lastPageRange = Math.ceil(total / pSize / 10) * 2;
    const pagingFast = (way) => {
        if (way === 'prev') pSize = pSize * (-1);
        if (pIndex + pSize > lastPageIndex) {
            setPIndex(lastPageIndex);
        } else {
            setPIndex(pIndex + pSize);
        }
        setPageList(pageList.map((el) => el + pSize));
    };
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