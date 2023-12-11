import React, { useState } from 'react'
import { clearCredentials } from '../Slices/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../Slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Dropdown = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false);
    const [logoutApiCall] = useLogoutMutation()
    const { userInfo } = useSelector((state) => state.auth)
    
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = async () => {
        try {
            await logoutApiCall().unwrap()
            dispatch(clearCredentials())
            navigate('/login')
        } catch (error) {
            console.log(error);
            if (error.status === 401) {
                toast.error('Token expired or not available. Logging out!');
                dispatch(clearCredentials());
                navigate('/login');
              } else {
                console.error('Error during logout:', error);
              }
        }
    }

  return (
    <div>
        <div className="relative inline-block text-left mb-5">
            <button
                id="dropdownDefaultButton"
                onClick={toggleDropdown}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
            >
                {userInfo.firstname} {userInfo.lastname}
                <svg
                className={`w-2.5 h-2.5 ms-3 ${isOpen ? 'transform rotate-180' : ''}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
                >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                />
                </svg>
            </button>

            {isOpen && (
                <div className="z-10 absolute mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                    <Link to='/home' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Home
                    </Link>
                    </li>
                    <li>
                    <Link to='/profile' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Profile
                    </Link>
                    </li>
                    <li>
                    <Link to='/report' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        User Report
                    </Link>
                    </li>
                    <li>
                    <button 
                        onClick={handleLogout} 
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Logout
                    </button>
                    </li>
                </ul>
                </div>
            )}
            </div>
    </div>
  )
}

export default Dropdown