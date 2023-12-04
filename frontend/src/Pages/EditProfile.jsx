import React, { useEffect, useState } from 'react'
import { LuUploadCloud } from "react-icons/lu";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setCredentials } from '../Slices/authSlice';
import { useUpdateUserMutation } from '../Slices/userSlice';
import LoadingSpinner from '../Components/Spinner';
import Dropdown from '../Components/Dropdown';

const EditProfile = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [country, setCountry] = useState('')
    const [gender, setGender] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')

    const { userInfo } = useSelector((state) => state.auth)
    const [updateProfile, {isLoading}] = useUpdateUserMutation()

    useEffect(() => {
      if (userInfo) {
        const formattedDate = userInfo.dateOfBirth ? new Date(userInfo.dateOfBirth).toISOString().split('T')[0] : '';
        setFirstName(userInfo.firstname);
        setLastName(userInfo.lastname);
        setEmail(userInfo.email);
        setPhone(userInfo.phone);
        setCountry(userInfo.country);
        setGender(userInfo.gender);
        setDateOfBirth(formattedDate);
      }
      console.log(userInfo);
    }, [userInfo]);

    const handleSubmit = async (e) => {
      e.preventDefault()
      if (password !== confirmPassword) {
          toast.error('Passwords do not match!')
      } else {
          try {
              const res = await updateProfile({
                  _id: userInfo._id,
                  firstname, lastname, email, password, phone, country, gender, dateOfBirth
              }).unwrap()
              dispatch(setCredentials({ ...res }))
              toast.success("Profile Updated")
          } catch (error) {
              toast.error(error?.data?.message || error.error)
          }
      }
  }

  return (
      <div className="px-3 py-5">
          <Dropdown />
            <div className="flex p-5 border-b-2 border-slate-200">
                <img
                    className="w-15 h-15 rounded-full dark:bg-gray-500 aspect-square"
                    src={'https://source.unsplash.com/150x150/?portrait?'} 
                />
                <div className="border border-r-4 border-slate-300 mx-6"></div>

                <div className="justify-center items-center">
                    <div>
                        <button>
                            <div className="flex border border-green-500 rounded-lg px-8 py-2">
                                <LuUploadCloud size={24} />
                                Upload Photo
                            </div>
                        </button>
                        <div className="text-red-500 text-center">
                          Remove
                        </div>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
            <div>
                <div className="mt-2">
                    <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</p>
                    <input
                        type='text' 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-700 dark:border-green-600 dark:placeholder-green-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" 
                        placeholder="First Name"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstname} 
                    />
                </div>
                <div className="mt-2">
                    <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</p>
                    <input type='text' 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-700 dark:border-green-600 dark:placeholder-green-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" 
                        placeholder="First Name"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastname} 
                    />
                </div>
                <div className="mt-3">
                    <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</p>
                    <input type='email'
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="email@gmail.com"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email} 
                    />
                </div>
                <div className="mt-2">
                    <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</p>
                    <input type='tel'
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="735 986 5433"
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone} 
                    />
                </div>
                <div className="mt-2">
                    <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</p>
                    <input type='text'
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Male?Female?"
                        onChange={(e) => setGender(e.target.value)}
                        value={gender} 
                    />
                </div>
                <div className="mt-2">
                    <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</p>
                    <input type='text'
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Country"
                        onChange={(e) => setCountry(e.target.value)}
                        value={country} 
                    />
                </div>
                <div className="mt-2">
                    <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of birth</p>
                    <input type='date'
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Date of Birth"
                        onChange={(e) => setDateOfBirth(e.target.value)}
                        value={dateOfBirth} 
                    />
                </div>

                { isLoading && <LoadingSpinner />}

                <div className="mt-4 flex items-center justify-center">
                    <button className="rounded-lg focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                      Save & Update
                    </button>
                </div>

                <Link className="flex justify-center font-bold text-green-500 underline">
                    Reset Password?
                </Link>
                
            </div>
            </form>
        </div>
  )
}

export default EditProfile