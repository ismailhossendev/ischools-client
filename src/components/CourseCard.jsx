import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { mainContext } from '../context/MainContext';

const CourseCard = ({course}) => {
    const {dark} = useContext(mainContext)
    if(!course){
        return
    }
    const {name,image,isPremium} = course;
    return (
        <div>
            <div className={` rounded-md shadow-md ${dark ? 'bg-gray-100 text-gray-900' : 'bg-gray-900 text-gray-100'}`} >
            <div className="relative">
             <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-60 bg-gray-500" />
             <p className='absolute bg-green-700 p-2 font-serif -bottom-5 text-white py-3 right-10 rounded-full text-xl font-bold'>{isPremium ? 'Premium': 'Free'}</p>
            </div>
            <div className="flex flex-col justify-between p-6 space-y-8" >
                <div className="space-y-2" >
                    <h2 className="text-2xl font-semibold tracking-wide">{name}</h2>
                    <p className="dark:text-gray-100">Course Details erat nunc, sed ullamcorper erat vestibulum eget.</p>
                </div>
                <Link type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900">Details</Link>
            </div>
        </div>
        </div>
    );
};

export default CourseCard;