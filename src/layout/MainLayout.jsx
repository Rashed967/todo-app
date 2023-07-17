import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../pages/Home/Home/Home';

const MainLayout = () => {
    return (
        <>
            
            <Outlet />
            <Home></Home>
        </>
    );
};

export default MainLayout;