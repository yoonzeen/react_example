import React from 'react';
import Nav from './Nav';

const Main = () => {
    return (
        <div className='wrapper main'>
            <div className='content'>
                안녕하세요!
                <Nav tossClass={'big'} />
            </div>
        </div>
    );
};

export default Main;