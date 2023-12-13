import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useGetMedicinesMutation } from '../Slices/medicineSlice';
import { toast } from 'react-toastify';
import { GiMedicinePills } from "react-icons/gi";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import Dropdown from '../Components/Dropdown';

const Reminder = () => {
    const { userInfo } = useSelector((state) => state.auth)
    const [scheduled, setScheduled] = useState([]);
    const [getMedicines, { isLoading }] = useGetMedicinesMutation()

    useEffect(() => {
        const fetchMedicines = async () => {
          try {
            const res = await getMedicines(userInfo._id).unwrap();
            const sortedMedicines = [...res].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            setScheduled(sortedMedicines);
          } catch (error) {
            console.error('Error fetching medicines:', error);
            if (error.status === 403) {
              toast.error('You do not have permission to access your medicines.');
            } else {
              toast.error('Error fetching medicines. Please try again later.');
            }
          }
        };
    
        fetchMedicines();
      }, [getMedicines, userInfo._id]);

      const mostCurrentMedicine = scheduled.length > 0 ? scheduled[0] : null;

  return (
    <div className='p-5'>
      <Dropdown />
      <div>
        <h1 className='font-bold'>Reminder</h1>
        <p className='text-sm text-slate-500'>Turn off reminder by selecting either of the options below</p>
      </div>

      <div className='mt-5 max-w-sm p-4 bg-white border border-green-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        {mostCurrentMedicine ? (
          <div>
            <GiMedicinePills size={30} />
            <p className="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{mostCurrentMedicine.dosage}</p>
                    <p className='font-extrabold text-3xl'>{mostCurrentMedicine.name}</p>
                    <p className="mb-2 font-normal text-gray-500 dark:text-gray-400">{mostCurrentMedicine.when}</p>
                    <p className="">{new Date(mostCurrentMedicine.start).toLocaleDateString()}</p>
                    <div className='flex justify-end'>
                      <IoNotificationsCircleOutline size={25} />
                    </div>
          </div>
        ) : (
          <div>
            <p>No Reminder/Notification Available</p>
          </div>
        )}
      </div>

      <div className='mt-3'>
        <h1 className='font-bold'>Did you take your medication ?</h1>
      
        <div className="mt-2 inline-flex rounded-md shadow-sm" role="group">
          <button 
            type="button" 
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            Yes
          </button>
          <button 
            type="button" 
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            No
          </button>
        </div>
      </div>

      <div className='border-b-2 mt-5'></div>

      <div>
        <div className='mt-2 flex justify-between'>
          <h1 className='text-sm font-bold'>November 2023</h1>
          <p className='text-sm'>This Month || <span className='font-bold'>52.49%</span></p>
        </div>
      </div>

    </div>
  )
}

export default Reminder