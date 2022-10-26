import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import { mainContext } from '../context/MainContext';

const Courses = () => {
    const {courses} = useContext(mainContext);
    const [active,setActive] = useState(true)
    const [category,setCategory] = useState([]);
    

    const handleCategory = (e) =>{
        const categoryName = e.target.value;
        console.log(categoryName);
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
       <section className='lg:w-10/12 mx-auto grid lg:grid-cols-6 grid-cols-1 w-[95%]'>
            <div className='grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-4 my-10 col-span-5'>
                {
                  active ?  courses.map(c=> <CourseCard course={c} key={c.id} />) :
                  category.map(c=> <CourseCard course={c} key={c.id} />)
                }
            </div>
            <div className="">
            <aside className="w-full p-6  bg-gray-900 text-gray-100 m-2 my-10 rounded">
                <nav className="lg:space-y-8 text-sm lg:block flex w-full justify-around">
                    <div className="space-y-2" bis_skin_checked="1">
                        <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-400">Category</h2>
                        <div className="flex flex-col space-y-1 items-start" bis_skin_checked="1">
                            <button onClick={handleCategory} className="" value='all'>All</button>
                            <button onClick={handleCategory} className="" value="Language Learning" >Language Learning</button>
                            <button onClick={handleCategory} className="" value="Kids' Courses" >Kids' Courses</button>
                            <button onClick={handleCategory} className="" value="Skill Development">Skill Development</button>
                        </div>
                    </div>
                    <div className="space-y-2 " bis_skin_checked="1">
                        <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-400">Pages</h2>
                        <div className="flex flex-col space-y-1" bis_skin_checked="1">
                            <Link to='/'>Home</Link>
                            <Link to='/blog'>Blog</Link>
                            <Link to='/courses'>Courses</Link>
                            <Link to='/faq'>FAQ</Link>
                            <Link to='/login'>Login</Link>
                            <Link to='/register'>Register</Link>
                        </div>
                    </div>
                </nav>
            </aside>
            </div>
       </section>
    );
};

export default Courses;