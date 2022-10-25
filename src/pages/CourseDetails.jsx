import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FiCheck } from "@react-icons/all-files/fi/FiCheck"




const CourseDetails = () => {
    const course = useLoaderData();
    const {name,image,enrolled,time,isPremium,videos,quiz,chapter,note,category,instructor,instractorDetails,instractorImg,whatLearning,aboutCourse,CourseContent} = course
    return (
        <div className='lg:w-10/12 mx-auto grid lg:grid-cols-4'>
            <div className="lg:col-span-3">
                <div className="flex flex-col  p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-900 text-gray-100" bis_skin_checked="1">
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
                <div className="border p-7 my-4 rounded">
                    <p className='text-xl font-semibold font-serif '>What you'll Learn ?</p>
                    <ul className='grid grid-cols-2 p-1'>
                        {whatLearning.map(w => <li className='flex gap-1 items-top'> <FiCheck className='bg-red-900 rounded-full p-1 text-xl' /> {w}</li>)}
                    </ul>
                </div>
            </div>
            <div className=""></div>
        </div>
    );
};

export default CourseDetails;