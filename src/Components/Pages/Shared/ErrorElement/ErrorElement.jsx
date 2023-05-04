import React, { useContext } from 'react';


import { AuthContext } from '../../../Provider/AuthProvider';
import Loader from '../Loader/Loader';

const ErrorElement = () => {
    const { loading } = useContext(AuthContext)

    if (loading) {
        return <Loader />
    } else {

    return <img className='mb-5 mx-auto h-screen w-full inset-0 bg-cover bg-center' src="https://raw.githubusercontent.com/shaumicwc/Error-Image/main/peakpx.jpg" alt="" />
    }


};

export default ErrorElement;