import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useLogoutMutation } from '../Slices/userSlice'
import { clearCredentials } from '../Slices/authSlice'
import { IoNotificationsCircleOutline } from "react-icons/io5";

const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { userInfo } = useSelector((state) => state.auth)
    const [logoutApiCall] = useLogoutMutation()

    console.log('userInfo:', userInfo);

    const handleLogout = async () => {
        try {
            await logoutApiCall().unwrap()
            dispatch(clearCredentials())
            navigate('/')
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>

            {userInfo ? (
                <>
                <div className="relative flex flex-col w-full min-w-0 mb-6 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30 draggable">
                    <div className="px-9 pt-9 flex-auto min-h-[70px] pb-0 bg-transparent">
                        <div className="flex flex-wrap mb-6 xl:flex-nowrap">
                            <div className="mb-5 mr-5">
                                <div className="relative inline-block shrink-0 rounded-2xl">
                                    <img
                                        className="inline-block shrink-0 rounded-2xl w-[80px] h-[80px] lg:w-[160px] lg:h-[160px]"
                                        src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar1.jpg"
                                        alt="image"
                                    />
                                </div>
                            </div>
                            <div className="grow">
                                <div className="flex flex-wrap items-start justify-between mb-2">
                                    <div className="flex flex-col">
                                        <div className="flex items-center mb-2">
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
                <div>
                    <h1>Upcoming Schedule</h1>
                </div>
                <div>
                    <Link to='schedule'>View All</Link>
                </div>
            </div>

        </div>
    )
}

export default Home