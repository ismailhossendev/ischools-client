import React from 'react';
import { Link } from 'react-router-dom';


const Hero = () => {
    return (
        <section className="">
                <div className="container  mx-auto flex flex-col items-center px-4 py-10 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl" bis_skin_checked="1">
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl">Welcome 
                        <span className="text-violet-400">To </span>Best Online Schools in Bangladesh                     </h1>
                    <div className="flex flex-wrap justify-center" bis_skin_checked="1">
                        <Link to='/courses' className="px-8 py-3 m-2 text-lg font-semibold my-4 rounded bg-violet-400 text-gray-900">Courses</Link>
                    </div>
                </div>
            </section>
    );
};

export default Hero;