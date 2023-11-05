import React from 'react';
import NavBar from '../shared/NavBar';
import LoginPage from '../component/LoginPage/LoginPage';

const MainLayout = () => {
    return (
        <div className='bg-image h-screen py-4'>
            <NavBar></NavBar>
            <LoginPage></LoginPage>
        </div>
    );
};

export default MainLayout;