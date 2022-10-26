import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { mainContext } from '../context/MainContext';
import { FaRegMoon,FaRegLightbulb ,FaSchool,FaUserAlt} from "react-icons/fa";

const Header = () => {
    const {dark,setDark,user} = useContext(mainContext)
    return (
        <div className="navbar lg:w-10/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-gray-800 rounded-box w-52">
                <li className="flex">
                    <Link to='/courses'  className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Courses</Link>
                </li><li className="flex">
                    <Link to='/blog' className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Blog</Link>
                </li><li className="flex">
                    <Link to='/contact' className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Contact</Link>
                </li><li className="flex">
                    <Link to='/register' className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Register</Link>
                </li>
                <div className="block md:block ">
                {   
                    !user?.uid ?
                    <li> <Link to='/login' className="">Login</Link></li>
                    :
                    <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                        <div className="avatar">
                            <div className="w-14 mx-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 " >
                                { user?.photoURL ? 
                                    <img src={user?.photoURL} alt="profile" />
                                :
                                <img className='w-14  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ' src="https://us.123rf.com/450wm/urfandadashov/urfandadashov1809/urfandadashov180901275/109135379-photo-not-available-vector-icon-isolated-on-transparent-background-photo-not-available-logo-concept.jpg?ver=6" alt="" />
                                }

                            </div>
                        </div>
                    </div>
                }
            </div>
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-2xl"> <FaSchool/> ISchools</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
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
        <div className="navbar-end ">
            <div onClick={()=>setDark(!dark)} className="mx-4 flex text-2xl btn btn-circle">
               { dark ? 
                 <FaRegMoon/>  :
                 <FaRegLightbulb/>
               }
               

            </div>
            <div className="hidden md:block">
                {   
                    !user?.uid ?
                    <Link to='/login' className="btn btn-warning">Login</Link>
                    :
                    <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                        <div className="avatar">
                            <div className="w-14 mx-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 " >
                                { user?.photoURL ? 
                                    <img src={user?.photoURL} />
                                :
                                <img className='w-14  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ' src="https://us.123rf.com/450wm/urfandadashov/urfandadashov1809/urfandadashov180901275/109135379-photo-not-available-vector-icon-isolated-on-transparent-background-photo-not-available-logo-concept.jpg?ver=6" alt="" />
                                }

                            </div>
                        </div>
                    </div>
                }
            </div>
            
        </div>
      </div>
    );
};

export default Header;