import React from 'react'
import { GiMedicinePills } from "react-icons/gi";

const Schedule = () => {
  return (
      <div className="p-5">
        <div className="border-b-2 border-slate-200">
            <p className="font-bold text-2xl">Schedule</p>
            <p className='text-sm'>Tap to edit or delete scheduled reminders</p>
        </div>
        <div className="mt-3 px-2 py-3 border border-green-400 flex justify-between">
                <div className="flex">
                    <div className="border rounded-full p-5">
                      <GiMedicinePills size={25} />
                    </div>
                    <div className="ml-3 justify-center">
                        <div>
                            <p className="text-sm">No of Pills</p>
                            <p className="text-md font-bold">Type of Pill</p>
                            <p className="text-sm">Time to take</p>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <p className="">Date</p>
                </div>
        </div>
            {/* <div className="mt-3 px-2 py-3 border border-green-400 flex justify-between">
                <div className="flex">
                    <div className="border rounded-full p-5">
                      <GiMedicinePills size={25} />
                    </div>
                    <div className="ml-3 justify-center">
                        <div>
                            <p className="text-sm">No of Pills</p>
                            <p className="text-md font-bold">Type of Pill</p>
                            <p className="text-sm">Time to take</p>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <p className="font-bold text-lg">Date</p>
                    <p>Time</p>
                </div>
            </div> */}

            {/* <div className="mt-3 px-2 py-3 border border-green-400 flex justify-between">
                <div className="flex">
                    <div className="border rounded-full p-5">
                      <GiMedicinePills size={25} />
                    </div>
                    <div className="ml-3 justify-center">
                        <div>
                            <p className="text-sm">No of Pills</p>
                            <p className="text-md font-bold">Type of Pill</p>
                            <p className="text-sm">Time to take</p>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <p className="font-bold text-lg">Date</p>
                    <p>Time</p>
                </div>
            </div> */}

            {/* <div className="mt-3 px-2 py-3 border border-green-400 flex justify-between">
                <div className="flex">
                    <div className="border rounded-full p-5">
                      <GiMedicinePills size={25} />
                    </div>
                    <div className="ml-3 justify-center">
                        <div>
                            <p className="text-sm">No of Pills</p>
                            <p className="text-md font-bold">Type of Pill</p>
                            <p className="text-sm">Time to take</p>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <p className="font-bold text-lg">Date</p>
                    <p>Time</p>
                </div>
            </div> */}

            {/* <div className="mt-3 px-2 py-3 border border-green-400 flex justify-between">
                <div className="flex">
                    <div className="border rounded-full p-5">
                      <GiMedicinePills size={25} />
                    </div>
                    <div className="ml-3 justify-center">
                        <div>
                            <p className="text-sm">No of Pills</p>
                            <p className="text-md font-bold">Type of Pill</p>
                            <p className="text-sm">Time to take</p>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <p className="font-bold text-lg">Date</p>
                    <p>Time</p>
                </div>
            </div> */}
    </div>
  )
}

export default Schedule