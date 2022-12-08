import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = ({tossClass}) => {
    const indicator = useRef();
    const location = useLocation().pathname.replaceAll('/','');
    
    useEffect(() => {
        if (location) {
            const nav = document.querySelector('.nav');
            const navOn = document.querySelector('.on');
            const navOnOfclientLeft = navOn.getBoundingClientRect().x - nav.getBoundingClientRect().x;
            // const navMarginRight = parseInt(window.getComputedStyle(navOff).getPropertyValue('margin-right').replace('px',''));
            indicator.current.style.width = navOn.clientWidth + 'px';
            indicator.current.style.left = navOnOfclientLeft + 'px';
        }
        
    }, [location]);

    return (
        <div className={`nav ${tossClass ? tossClass : ''}`}>
            <div className={`navEl ${location === 'validator' ? 'on' : ''}`}><Link to="/validator">유효성검사</Link></div>
            <div className={`navEl ${location === 'movies' ? 'on' : ''}`}><Link to="/movies">영화</Link></div>
            <div className={`navEl ${location === 'sledge' ? 'on' : ''}`}><Link to="/sledge">썰매장</Link></div>
            <span className='indicator' ref={indicator}></span>
        </div>
    );
}; 

export default Nav;