import React from 'react';

const ListItem = ({ el }) => {
    const { rnum, rankInten, rankOldAndNew, movieNm, openDt, audiAcc } = el;
    return (
        <li>
            <div>
                <span>{rnum} <span className='inten'>{rankInten}</span></span>
                <span className='rankOldAndNew'>{rankOldAndNew}</span>
                <span className='name'>{movieNm}</span>
                <span className='openDt'>({openDt})</span>
                <span className='audiAcc'>{audiAcc}</span>
            </div>
        </li>
    );
};

export default ListItem;