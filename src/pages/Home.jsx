import React from 'react';
import Hero from '../components/Hero';
import TopCourseCategory from '../components/topCourseCategory';

const Home = () => {
    return (
        <div className='md:w-9/12 w-11/12 mx-auto z-30'>
            <Hero/>
            <TopCourseCategory/>
        </div>
    );
};

export default Home;