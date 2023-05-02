import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div className=''>
            <Header/>
            <Outlet/>
            <ToastContainer/>
            <Footer/>
        </div>
    );
};

export default Main;