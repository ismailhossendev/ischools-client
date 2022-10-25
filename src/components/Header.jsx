import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { mainContext } from '../context/MainContext';

const Header = () => {
    const {dark,setDark} = useContext(mainContext)
    return (
            <header className={`p-4 border-b-2 sticky top-0 z-50 ${dark ? 'bg-gray-900 text-white': 'bg-gray-300 text-zinc-900 border-black'}`}>
                <div className="container flex justify-between h-16 mx-auto" bis_skin_checked="1">
                    <div className="flex" bis_skin_checked="1">
                        <Link to='/' aria-label="Back to homepage" className="flex items-center p-2 font-serif font-semibold text-2xl">
                            ISchools
                        </Link>
                        <ul className="items-stretch hidden space-x-3 lg:flex">
                            <li className="flex">
                                <Link to='/courses'  className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Courses</Link>
                            </li><li className="flex">
                                <Link to='/blog' className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Blog</Link>
                            </li><li className="flex">
                                <Link to='/contact' className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Contact</Link>
                            </li><li className="flex">
                                <Link to='/register' className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Register</Link>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="items-center flex-shrink-0 hidden lg:flex" bis_skin_checked="1">
                        <label for="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer  mx-4">
                            <span>{dark ? 'Light' : 'Dark'} </span>
                            <span className="relative">
                                <input onClick={()=> setDark(!dark)} id="Toggle1" type="checkbox" className="hidden peer" />
                                <div className="w-10 h-6 rounded-full shadow-inner bg-gray-400 peer-checked:bg-violet-400" bis_skin_checked="1"></div>
                                <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800" bis_skin_checked="1"></div>
                            </span>
                        </label>
                        <Link to='/login' className="px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900">Log in</Link>
                    </div>
                    <button className="p-4 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 ">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </header>
    );
};

export default Header;