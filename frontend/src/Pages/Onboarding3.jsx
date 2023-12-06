import React from 'react'
import { Link } from 'react-router-dom'

const Onboarding3 = () => {
  return (
    <div>
       <div className="mt-2 p-3">
            <div className="flex justify-center items-center">
                <img src="./frame37156.png" alt="" />
            </div>
            <div className="px-14 mt-2">
                <p className="font-bold text-2xl pb-2">Find The Best Service</p>
                <p className="text-sm">Share your reports to a healthcare
                    provider to help you access them and take
                    adequate suggestions about your health
                </p>
               
                <div className="flex justify-center py-5">
                    <div className="flex w-3 h-3 mx-2 bg-gray-200 rounded-full"></div>
                    <div className="flex w-3 h-3 bg-green-200 rounded-full"></div>
                    <div className="flex w-3 h-3 mx-2 bg-gray-500 rounded-full"></div>
                </div>

                <div className="mt-2">
                    <Link to='/login'>
                      <button className="w-full items-center justify-center rounded-lg focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            GET STARTED
                      </button>
                    </Link>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Onboarding3