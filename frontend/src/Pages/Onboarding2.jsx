import React from 'react'
import { Link } from 'react-router-dom'
import { GrLinkNext } from "react-icons/gr";

const Onboarding2 = () => {
  return (
    <div>
       <div className="mt-2">
            <div className="flex justify-center items-center">
                <img src="./frame37154.png" alt="" />
            </div>
            <div className="px-14 mt-2">
                <p className="font-bold text-2xl pb-2">Fast Check</p>
                <p className="text-sm">Keep track of your medical reports
                    seamlessly at the comfort of your home 
                    and share with a Professional.
                </p>
               
                <div className="flex justify-center py-5">
                    <div className="flex w-3 h-3 mx-2 bg-gray-200 rounded-full"></div>
                    <div className="flex w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="flex w-3 h-3 mx-2 bg-gray-200 rounded-full"></div>
                </div>

                {/* <div className="pt-5 flex-row">
                    <Link to='/onboarding1'>
                        <p className="font-bold text-2xl">Back</p>
                    </Link>
                </div> */}

                <div className="pt-3 mb-2">
                    <Link to='/onboarding3'>
                      <button className="flex items-center justify-center rounded-none focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-md w-full px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                          NEXT
                          <GrLinkNext size={24} />
                      </button>
                    </Link>

                    <Link to='/login'>
                      <button className="mt-2 text-green-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium w-full rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:text-green dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        SKIP
                      </button>
                    </Link>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Onboarding2