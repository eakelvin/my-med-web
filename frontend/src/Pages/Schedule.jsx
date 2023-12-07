import React, { useEffect, useState } from 'react'
import { GiMedicinePills } from "react-icons/gi";
import { useGetMedicinesMutation } from '../Slices/medicineSlice';
import { useSelector } from 'react-redux';
import LoadingSpinner from '../Components/Spinner';
import { toast } from 'react-toastify'

const Schedule = () => {
    const [scheduled, setScheduled] = useState([])
    const [getMedicines , { isLoading }] = useGetMedicinesMutation()
    const { userInfo } = useSelector((state) => state.auth)

    useEffect(() => {
        const fetchMedicines = async () => {
            try {
                const res = await getMedicines(userInfo._id).unwrap()
                setScheduled(res)
            } catch (error) {
                console.error('Error fetching medicines:', error);
                // toast.error(error)
                if (error.status === 403) {
                    toast.error('You do not have permission to access your medicines.');
                } else {
                    toast.error('Error fetching medicines. Please try again later.');
                }
            }
        }

        fetchMedicines()
    }, [getMedicines, userInfo._id])

  return (
      <div className="p-5">
        <div className="border-b-2 border-slate-200">
            <p className="font-bold text-2xl">Schedule</p>
            <p className='text-sm'>Tap to edit or delete scheduled reminders</p>
        </div>

        { isLoading && <LoadingSpinner />}

        {   scheduled && 
            scheduled.length > 0 && 
            scheduled.map((schedule) =>
                <div key={schedule._id} className="mt-5 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <GiMedicinePills size={30} />
                    <p className="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{schedule.dosage}</p>
                    <p className='font-extrabold text-3xl'>{schedule.name}</p>
                    <p className="mb-2 font-normal text-gray-500 dark:text-gray-400">{schedule.when}</p>
                    <p className="">{new Date(schedule.start).toLocaleDateString()}</p>
                    <a href="#" className="inline-flex items-center text-blue-600 hover:underline">
                        Edit Schedule
                    </a>
                </div>
        )}


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