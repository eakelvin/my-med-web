import React from 'react'
import { MdBloodtype } from "react-icons/md";
import { MdSick } from "react-icons/md";
import { FaDisease } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import { FaWeight } from "react-icons/fa";
import { GiBodyHeight } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Dropdown from '../Components/Dropdown';

const Profile = () => {
  const { userInfo } = useSelector((state) => state.auth)
  
  return (
    <div>
      <div className="p-5">
        <Dropdown />
            <div className="flex justify-between">
                <div className="flex">
                    <img
                        className="w-12 h-12 mx-auto rounded-full dark:bg-gray-500 aspect-square"
                        src={'https://source.unsplash.com/150x150/?portrait?3'} 
                    />

                    <div className="ml-2 justify-center">
                        <div>
                            <p className="text-xl font-semibold">{userInfo.firstname} {userInfo.lastname}</p>
                            <p className="text-sm dark:text-gray-400">{userInfo.country} {userInfo.gender}</p>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="border border-green-500 px-8 py-1 rounded-lg">
                        <Link to='/edit-profile'>
                            <p>Edit</p>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="mt-3">
                <div className="border border-y-2 border-slate-300">
                    <p className="text-mute p-2">Medical Details</p>
                </div>
                <div className="p-5">
                    <div className="flex justify-between">
                        <div className="flex">
                            <MdBloodtype size={24} />
                            <p className="text-md font-bold ml-2">Blood Type</p>
                        </div>
                        <div>
                            <p className="text-mute">O+</p>
                        </div>
                    </div>
                    <div className="flex justify-between my-3">
                        <div className="flex">
                            <FaDisease size={24} color='black' />
                            <p className="text-md font-bold ml-2">Chronic Disease</p>
                        </div>
                        <div>
                            <p className="text-mute">Diabetes</p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex">
                            <MdSick size={24} />
                            <p className="text-md font-bold ml-2">Epilepsy</p>
                        </div>
                        <div>
                            <p className="text-mute">NO</p>
                        </div>
                    </div>
                    <div className="flex justify-between my-3">
                        <div className="flex">
                            <FaHeartbeat size={24} />
                            <p className="text-md font-bold ml-2">Organ Donor</p>
                        </div>
                        <div>
                            <p className="text-mute">YES</p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex">
                            <FaWeight size={24} />
                            <p className="text-md font-bold ml-2">Weight</p>
                        </div>
                        <div>
                            <p className="text-mute">135 lb</p>
                        </div>
                    </div>
                    <div className="flex justify-between my-3">
                        <div className="flex">
                            <GiBodyHeight size={24} />
                            <p className="text-md font-bold ml-2">Height</p>
                        </div>
                        <div>
                            <p className="text-mute">5ft, 9in</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="mt-2 border-b-2 border-slate-300">
                <p className="border border-slate-200 border-2-4 border-t-2 text-mute p-2">Conditions & Allergies</p>
                <div className="p-2">
                    <p className="font-bold text-green-500 mt-2">Medical Conditions</p>
                    <p className="mt-1">High blood Pressure</p>

                    <p className="font-bold text-green-500 mt-5">Allergies & Reactions</p>
                    <p className="mt-1 mb-3">Penicillin - Severe skin rash</p>
                </div>
            </div>

            <div className="p-5 text-center items-center">
                <p className="text-mute">
                    Update your medical details frequently as it helps keeps
                    tracks of your health conditions.
                </p>
                <div className="mt-4 mb-3">
                    <Link to='/medical-details'className="bg-green-500 px-10 py-3 rounded-lg">
                        Update
                    </Link>
                </div>
                <p className="my-5 text-medium">Last updated Nov 27, 2023 at 8:37AM</p>
            </div>

        </div>
    </div>
  )
}

export default Profile