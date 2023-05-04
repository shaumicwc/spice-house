import React, { useContext, useEffect, useState } from 'react';
import CoursesCard from '../CoursesCard/CoursesCard';
import { AuthContext } from '../../../Provider/AuthProvider';

const Courses = () => {
    const [courses, setCourses] = useState([])
    const {setLoading} = useContext(AuthContext)

    useEffect(()=>{
        fetch('https://ai-10-spice-house-server-shaumicwc.vercel.app/cuisineCourse')
        .then(res => res.json())
        .then(data => setCourses(data))
        setLoading(false)
    },[])
    return (
        <div className='my-5 flex flex-col items-center '>
            <p className='text-3xl font-bold mb-5'>Our Courses</p>
            <div className='mx-auto grid grid-cols-1 md:grid-cols-3 gap-4' >
            {
                courses.map(course => <CoursesCard
                course={course}
                key={course.id}
                ></CoursesCard>)
            }
        </div>
        </div>
    );
};

export default Courses;