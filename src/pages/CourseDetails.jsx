import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { useContext } from 'react';
import { mainContext } from '../context/MainContext';
import { FaPlayCircle ,FaVideo,FaCheckCircle,FaKey,FaTeamspeak,FaCertificate,FaPrint} from "react-icons/fa";


import Pdf from "react-to-pdf";
const ref = React.createRef();
const options = {
    orientation: 'landscape',
    unit: 'in',
};


const CourseDetails = () => {
    const course = useLoaderData();
    const {dark} = useContext(mainContext);
    const {name,image,time,videos,quiz,chapter,instructor,instractorDetails,instractorImg,whatLearning,aboutCourse,courseContent,id} = course;
    return (
        <>  
            <div className='lg:w-10/12 w-[95%] space-y-4 gap-4 mx-auto grid lg:grid-cols-4  my-10 relative' ref={ref}>
                <div className="mt-4">
                <Pdf targetRef={ref} filename={`${name}.pdf`} options={options} >
                    {({toPdf}) => (
                        <p onClick={toPdf} className='absolute top-0 right-0 text-xl btn-circle btn btn-primary'><FaPrint/></p>
                    )}
                </Pdf>
                
                    <aside className="p-6  mx-auto bg-gray-900 text-gray-100 rounded">
                        <nav className=" text-sm ">
                            <div className="space-y-4 text-xl font-serif" bis_skin_checked="1">
                                <Link to={`/checkout/${id}`} className='btn btn-accent rounded-3xl w-full'>Buy Premium</Link>
                                <div className="flex flex-col it space-y-1" bis_skin_checked="1">
                                    <p className='flex gap-1 items-center'><FaPlayCircle/>{time} hour on-demand video</p>
                                    <p className='flex gap-1 items-center'><FaVideo/>{videos} videos</p>
                                    <p className='flex gap-1 items-center'><FaKey/>Full lifetime access</p>
                                    <p className='flex gap-1 items-center'><FaTeamspeak/>24/7 Support</p>
                                    <p className='flex gap-1 items-center'><FaCertificate/>Certificates</p>
                                </div>
                            </div>
                        </nav>
                    </aside>
                    <aside className="py-6  mx-auto bg-gray-900 text-gray-100 rounded my-4">
                    <div className="space-y-2" bis_skin_checked="1">
                        <h2 className="px-6 text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Course Features</h2>
                        <div className="flex flex-col space-y-1 " bis_skin_checked="1">
                        <div className="flex px-6 justify-between border-t py-1">
                                <p className='flex gap-1 items-center'><FaCertificate/>Lectures</p>
                                <p>{chapter}</p>
                        </div>
                        <div className="flex px-6 justify-between border-t py-1">
                                <p className='flex gap-1 items-center'><FaCertificate/>Quizzes</p>
                                <p>{quiz}</p>
                        </div>
                        <div className="flex px-6 justify-between border-t py-1">
                                <p className='flex gap-1 items-center'><FaCertificate/>Duration</p>
                                <p>{time} Hours</p>
                        </div>
                        <div className="flex px-6 justify-between border-y py-1">
                                <p className='flex gap-1 items-center'><FaCertificate/>Language</p>
                                <p>Bangla</p>
                        </div>
                        </div>
                    </div>
                    </aside>
                </div>
                <div className="lg:col-span-3" >
                    <div className="flex flex-col  p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-900 text-gray-100 " bis_skin_checked="1">
                        <div className="flex space-x-4" bis_skin_checked="1">
                            <img alt="" src={instractorImg} className="object-cover w-12 h-12 rounded-full shadow bg-gray-500" />
                            <div className="flex flex-col space-y-1" bis_skin_checked="1">
                                <Link rel="noopener noreferrer" href="#" className="text-sm font-semibold">{instructor}</Link>
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
                            {whatLearning.map(w => <li className='flex gap-1 items-top'> <FaCheckCircle className='bg-red-900 rounded-full p-1 text-xl' /> {w}</li>)}
                        </ul>
                        {
                            courseContent.map(c => <div className="collapse my-2 rounded">
                                <input type="checkbox" className="peer" /> 
                                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                {c}
                                </div>
                                <div className="collapse-content h-10  bg-secondary text-primary-content peer-checked:bg-warning peer-checked:text-primary"> 
                                <p className='flex items-center leading-10 gap-1 '><FaPlayCircle/>: {c}</p>
                                </div>
                            </div> )
                        }
                        <h1 className='mt-4 text-2xl font-semibold font-serif'>Course Details:</h1>
                        <div className="p-4 lg:text-xl font-serif"><p>{aboutCourse}</p></div>
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default CourseDetails;