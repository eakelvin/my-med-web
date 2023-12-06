import React from 'react'
import { Link } from 'react-router-dom'

const Onboarding1 = () => {
  return (
    <div>
      <div className="mt-3">
            <div className="flex justify-center items-center">
                <img src="./frame37158.png" alt="" />
            </div>
            <div className="px-14 mt-2">
                <p className="font-bold text-2xl pb-2">Medicinal Reminder</p>
                <p className="text-sm">Remember what to take, remember 
                    when to take, remember to take your 
                    health seriously because it's priceless.
                </p>
                
                <div className="flex justify-center py-5">
                    <div className="flex w-3 h-3 mx-2 bg-green-500 rounded-full"></div>
                    <div className="flex w-3 h-3  bg-gray-200 rounded-full"></div>
                    <div className="flex w-3 h-3 mx-2 bg-gray-200 rounded-full"></div>
                </div>
                
                <div className="mb-4">
                    <Link to='/onboarding2'> 
                      <button className="rounded-lg focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm w-full px-5 py-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                          NEXT 
                      </button>
                    </Link>
                </div>

                <div className='mb-3'>
                  <Link to='/login'> 
                    <button className="text-green-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm w-full px-5 py-2.5 me-2 mb-2 dark:text-green dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        SKIP 
                    </button>
                  </Link>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Onboarding1