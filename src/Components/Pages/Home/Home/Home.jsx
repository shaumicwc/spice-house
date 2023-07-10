import React, { useContext } from 'react';
import Banner from '../Banner/Banner';
import Chef from '../Chef/Chef';
import TraditionalFood from '../TraditionalFood/TraditionalFood';
import Courses from '../Courses/Courses';
import Loader from '../../Shared/Loader/Loader';
import { AuthContext } from '../../../Provider/AuthProvider';
import Banner2 from '../Banner2/Banner2';
import Testimonals from '../Testimonals/Testimonals';
import Accordion from '../Accordion/Accordion';


const Home = () => {
    const { loading, setLoading } = useContext(AuthContext)

    return (
        <div className='flex flex-col justify-center items-center'>
            
            <Banner />
            <Banner2/>
            <Chef />
            <TraditionalFood />
            <Courses />
            <Testimonals/>
            <Accordion/>
         
        </div>
    );
};

export default Home;