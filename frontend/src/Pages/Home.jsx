import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useLogoutMutation } from '../Slices/userSlice'
import { clearCredentials } from '../Slices/authSlice'
import { IoNotificationsCircleOutline } from "react-icons/io5";
import Dropdown from '../Components/Dropdown'
import { FaPills } from "react-icons/fa";

const Home = () => {
    const { userInfo } = useSelector((state) => state.auth)
    const { medicines } = useSelector((state) => state.medicine)
    // console.log('medicines', medicines);
    // console.log('userInfo:', userInfo);

    return (
        <div className='p-5'>
            <Dropdown />
            {userInfo ? (
                <>
                <div className="relative flex flex-col w-full min-w-0 mb-6 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30 draggable">
                    <div className="px-9 pt-9 flex-auto min-h-[70px] pb-0 bg-transparent">
                        <div className="flex flex-wrap mb-6 xl:flex-nowrap">
                            <div className="mr-5">
                                <div className="relative inline-block shrink-0 rounded-2xl">
                                    <img
                                        className="inline-block shrink-0 rounded-2xl w-[80px] h-[80px] lg:w-[160px] lg:h-[160px]"
                                        src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar1.jpg"
                                        alt="image"
                                    />
                                </div>
                            </div>
                            <div className="grow">
                                <div className="flex flex-wrap items-start justify-between">
                                    <div className="flex flex-col">
                                        <div className="flex items-center">
                                            <h3 className="text-secondary-inverse hover:text-blue transition-colors duration-200 ease-in-out font-semibold text-[1.5rem] mr-1">
                                                {userInfo.firstname} {userInfo.lastname}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <IoNotificationsCircleOutline size={50} />
                            </div>
                        </div>
                       
                    </div>
                </div>
                </>
            ) : (
                <div>Loading user information...</div>
            )}

            <hr className="w-full h-px border-neutral-200" />

            <div className='flex justify-between p-5'>
                <h1 className='font-bold text-lg'>Upcoming Schedule</h1>
                <Link to='/schedule' className='text-green-500 underline font-bold'>View All</Link>
            </div>

            <div  className="p-5 bg-green-500 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 rounded-lg">
                {/* {medicines.map((medicine) => (
                 <div key={medicine._id}>  */}
                <div className="flex">
                    <div className="border rounded-full w-16 p-3 bg-white">
                        <FaPills size={40} />
                    </div>
                    <div className="ml-3 justify-center">
                        <p className="text-sm text-white">{medicines.dosage}</p>
                        <p className="text-lg font-bold text-white">{medicines.name}</p>
                        <p className="text-sm text-white text-mute">{medicines.when}</p>
                    </div>
                </div>
                <div className="p-5 text-white">
                    <p>{new Date(medicines.start).toLocaleDateString()}</p>
                    {/* <p className="">{new Date(medicines.createdAt).toLocaleTimeString()}</p> */}
                </div>
                 {/* </div>
                 ))} */}
            </div>

            <div className="p-16">
                {/* <Link to='/reminder'> */}
                    <img className='mx-auto hover:bg-slate-800' src="./addpill.png" alt="" />
                {/* </Link> */}
                <p className='text-center'>Enter medication details and set reminder</p>
            </div>
        
            <div className="py-5 flex justify-center">
                <Link to='/add-medicine' className="w-full text-center rounded-lg w-1/2 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    ADD MEDICINE
                </Link>
            </div>

        </div>
    )
}

export default Home
