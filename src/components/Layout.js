import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './common/Header';
import Nav from './common/Nav';

const Layout = () => {
    return (
        <div className='wrapper'>
            <Header />
            <Nav />
            <Outlet />
        </div>
    );
};

export default Layout;