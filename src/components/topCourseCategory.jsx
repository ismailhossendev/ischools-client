import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { mainContext } from '../context/MainContext';
import CourseCard from './CourseCard';

const TopCourseCategory = () => {
    const {courses,dark} = useContext(mainContext);
    const [active,setActive] = useState(true)
    const [category,setCategory] = useState([]);
    

    const handleCategory = (e) =>{
        const categoryName = e.target.value;
        setActive(categoryName)
        if(categoryName === 'all'){
            setCategory(courses)
            return
        }
        const matchCategory = courses.filter(c=> c.category === categoryName)
        setCategory(matchCategory)
        setActive(false)
    }
    return (
        <div className=''>
            <div className="text-center">
                <h1 className='text-3xl font-mono font-bold '>Browse Our Top Courses</h1>
                <p className="font-serif text-xl">Choose your topic from our vast library to get started</p>
            </div>
            <div className="mb-5 flex justify-center mt-12 gap-2 pb-2">
                <button onClick={handleCategory} className={`bg-green-900 ${active && 'bg-blue-900'} px-2 py-1 rounded text-white font-semibold focus:bg-blue-700`} value='all'>All</button>
                <button onClick={handleCategory} className="bg-green-900 px-2 py-1 rounded text-white font-semibold focus:bg-blue-700" value="Language Learning" >Language Learning</button>
                <button onClick={handleCategory} className="bg-green-900 px-2 py-1 rounded text-white font-semibold focus:bg-blue-700" value="Kids' Courses" >Kids' Courses</button>
                <button onClick={handleCategory} className="bg-green-900 px-2 py-1 rounded text-white font-semibold focus:bg-blue-700" value="Skill Development">Skill Development</button>
                
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 my-4 lg:gap-3">
                {
                 active ? courses.map(c=> <CourseCard course={c} />) : category.map(c => <CourseCard course={c} />) 
                }
            </div>
            <div className="text-center py-4">
                <Link className={`px-4 py-2 border rounded-full border-green-800 text-green-800 font-semibold font-serif ${dark && 'bg-gray-100'}`}>View All Courses</Link>
            </div>
        </div>
    );
};

export default TopCourseCategory;