import React from 'react';
import Map from './Map';
import PhoneIcon from '@mui/icons-material/Phone';

const SledgeModal = ({item}) => {
    return (
        <div>
            <div>
                {item.REFINE_LOTNO_ADDR}
                <span className={`badge ${item.BSN_STATE_NM === '폐업' ? 'red ' : ''}${item.BSN_STATE_NM === '영업중' ? 'green ' : ''}${item.BSN_STATE_NM === '휴업' ? 'orange' : ''}`}>{item.BSN_STATE_NM}</span>
            </div>
            <div className='sm gray'>{item.REFINE_ROADNM_ADDR && <span className='mr05'>{item.REFINE_ROADNM_ADDR}</span>}
                {
                    item.LOCPLC_FACLT_TELNO &&
                    <span>
                        (<PhoneIcon style={{ verticalAlign: 'middle', width: '15' }} /> {item.LOCPLC_FACLT_TELNO})
                    </span>
                }
            </div>
            <div className='mt10'>
                <Map state={item.BSN_STATE_NM} lat={item.REFINE_WGS84_LAT} logt={item.REFINE_WGS84_LOGT} />
            </div>
        </div>
    );
};

export default SledgeModal;