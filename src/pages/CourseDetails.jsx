import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FiCheck } from "@react-icons/all-files/fi/FiCheck"
import { RiVideoFill } from "@react-icons/all-files/ri/RiVideoFill"
import { useContext } from 'react';
import { mainContext } from '../context/MainContext';





const CourseDetails = () => {
    const course = useLoaderData();
    const {dark} = useContext(mainContext);
    const {name,image,enrolled,time,isPremium,videos,quiz,chapter,note,category,instructor,instractorDetails,instractorImg,whatLearning,aboutCourse,courseContent} = course;
    console.log(courseContent);
    return (
        <div className='lg:w-10/12 w-[95%] space-y-4 gap-4 mx-auto grid lg:grid-cols-4  my-10'>
            <div className="mt-4">
                <aside className="p-6  mx-auto bg-gray-900 text-gray-100 rounded">
                    <nav className=" text-sm ">
                        <div className="space-y-2" bis_skin_checked="1">
                            <Link className='btn btn-secondary'>Buy Premium</Link>
                            <div className="flex flex-col it space-y-1" bis_skin_checked="1">
                                <a rel="noopener noreferrer" href="#">Installation</a>
                                <a rel="noopener noreferrer" href="#">Plugins</a>
                                <a rel="noopener noreferrer" href="#">Migrations</a>
                                <a rel="noopener noreferrer" href="#">Appearance</a>
                                <a rel="noopener noreferrer" href="#">Mamba UI</a>
                            </div>
                        </div>
                    </nav>
                </aside>
            </div>
            <div className="lg:col-span-3">
                <div className="flex flex-col  p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-900 text-gray-100 " bis_skin_checked="1">
                    <div className="flex space-x-4" bis_skin_checked="1">
                        <img alt="" src={instractorImg} className="object-cover w-12 h-12 rounded-full shadow bg-gray-500" />
                        <div className="flex flex-col space-y-1" bis_skin_checked="1">
                            <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{instructor}</a>
                            <span className="text-xs text-gray-400">{instractorDetails}</span>
                        </div>
                    </div>
                    <div bis_skin_checked="1">
                        <img src={image} alt="" className="object-cover w-full mb-4 h-60 rounded sm:h-96 bg-gray-500" />
                        <h2 className="mb-1 text-xl font-semibold">{name}</h2>
                        <p className="text-sm text-gray-400">{aboutCourse.slice(0,300)}..</p>
                    </div>
                </div>
                <div className={`border ${dark || 'border-black border'}  p-7 my-4 rounded`}>
                    <p className='text-xl font-semibold font-serif '>What you'll Learn ?</p>
                    <ul className='grid grid-cols-2 p-1'>
                        {whatLearning.map(w => <li className='flex gap-1 items-top'> <FiCheck className='bg-red-900 rounded-full p-1 text-xl' /> {w}</li>)}
                    </ul>
                    {
                        courseContent.map(c => <div className="collapse my-2 rounded">
                            <input type="checkbox" className="peer" /> 
                            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            {c}
                            </div>
                            <div className="collapse-content h-10  bg-secondary text-primary-content peer-checked:bg-warning peer-checked:text-primary"> 
                            <p className='flex items-center leading-10 gap-1'><RiVideoFill/>: {c}</p>
                            </div>
                        </div> )
                    }
                    <h1 className='mt-4 text-2xl font-semibold font-serif'>Course Details:</h1>
                    <div className="p-4 lg:text-xl font-serif"><p>{aboutCourse}</p></div>
                </div>
            </div>
            
        </div>
    );
};

export default CourseDetails;