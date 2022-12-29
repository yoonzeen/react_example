import React from 'react';
import loadingImgSrc from '../../assets/images/loading.gif';

const Loading = () => {
    return (
        <div className='txtC'>
            <img src={loadingImgSrc} alt="loading" style={{"width":"100px"}} />
        </div>
    );
};

export default Loading;