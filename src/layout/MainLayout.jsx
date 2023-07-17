import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';

const MainLayout = () => {
    return (
        <>
            <NavBar></NavBar>
            <Outlet />
           
        </>
    );
};

export default MainLayout;