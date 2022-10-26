import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaCcVisa,FaCcStripe,FaCcPaypal,FaCcJcb} from "react-icons/fa";
import { useContext } from 'react';
import { mainContext } from '../context/MainContext';
import toast from 'react-hot-toast';

const CheckOut = () => {
    const course = useLoaderData()
    const {user,loading} = useContext(mainContext)
    if(loading){
        return
    }

    return (
        <div className='flex justify-center my-10 w-full'>
            <div className="lg:w-96 w-10/12 shadow-black shadow-2xl my-10 p-4 rounded-xl relative">
                <div className="avatar absolute -top-10 right-[40%]">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={!user?.photoURL ? "https://placeimg.com/192/192/people" : user?.photoURL} alt="payment" />
                    </div>
                </div>
                <div className="mt-20 text-center ">
                    <h1>Payment For Premium Access With <br />{course.name}</h1>
                    <h4 className='mt-4 font-serif'>Please Select Payment Method</h4>
                    <div className="border-y border-black space-x-3">
                        <button className='text-4xl focus:text-red-700'><FaCcVisa/></button>
                        <button className='text-4xl focus:text-red-700'><FaCcStripe/></button>
                        <button className='text-4xl focus:text-red-700'><FaCcPaypal/></button>
                        <button className='text-4xl focus:text-red-700'><FaCcJcb/></button>
                    </div>
                    <div className='text-start my-4 space-y-1'>
                        <label for="email" className="block mb-1 text-sm">Card Number</label>
                        <input type="email" name="Number" id="email" placeholder="158 548 8455 5889" className="w-full  px-3 py-2 border rounded-md border-gray-700 bg-gray-600 text-gray-100" />
                        <label for="email" className="block mb-1 text-sm">Card Holder Name</label>
                        <input type="text" name="email" id="email" placeholder="john Sumit" className="w-full  px-3 py-2 border rounded-md border-gray-700 bg-gray-600 text-gray-100" />
                         <label for="email" className="block mb-1 text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full  px-3 py-2 border rounded-md border-gray-700 bg-gray-600 text-gray-100" />
                    </div>
                    <button className='btn w-full btn-primary ' onClick={() => toast.success('Payment Confirm')}>Confirm Payment</button>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;