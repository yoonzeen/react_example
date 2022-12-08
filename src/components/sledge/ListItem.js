import React from 'react';

const ListItem = ({ el, idx, pSize, pIndex }) => {
    const { SIGUN_NM, REFINE_LOTNO_ADDR, BIZPLC_NM, BSN_STATE_NM } = el;
    return (
        <div className='sledgeRow'>
            <span className='idx'>{pSize * (pIndex - 1) + (idx + 1)}</span>
            <span className='sigunNm'>{SIGUN_NM}</span>
            <span className='bizplcNm'>{BIZPLC_NM}<span className={`badge ${BSN_STATE_NM === '폐업' ? 'red ' : ''}${BSN_STATE_NM === '영업중' ? 'green ' : ''}${BSN_STATE_NM === '휴업' ? 'orange' : ''}`}>{BSN_STATE_NM}</span></span>
            <span className='addr'>{REFINE_LOTNO_ADDR}</span>
        </div>
    );
};

export default ListItem;