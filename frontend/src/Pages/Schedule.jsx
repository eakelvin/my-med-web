import React, { useEffect, useState } from 'react'
import { GiMedicinePills } from "react-icons/gi";
import { useDeleteMedicineMutation, useGetMedicinesMutation } from '../Slices/medicineSlice';
import { useSelector } from 'react-redux';
import LoadingSpinner from '../Components/Spinner';
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom';

const Schedule = () => {
    const [scheduled, setScheduled] = useState([])
    const [getMedicines , { isLoading }] = useGetMedicinesMutation()
    const [deleteMedicine] = useDeleteMedicineMutation()
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

    const handleDelete = async (id) => {
        try {
          await deleteMedicine(id).unwrap();
          setScheduled((prev) =>
            prev.filter((medicine) => medicine._id !== id)
          );
          toast.success('Medicine deleted successfully');
        } catch (error) {
          console.error('Error deleting medicine:', error);
          toast.error('Error deleting medicine. Please try again later.');
        }
    };
      

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

                    <div className="mt-3 inline-flex rounded-md shadow-sm" role="group">
                    <Link to={`/update-schedule/${schedule._id}`}>
                        <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            Edit
                        </button>
                    </Link>
                    <button 
                        onClick={() => handleDelete(schedule._id)} 
                        type="button" 
                        className="px-4 py-2 text-sm font-medium bg-red-500 text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                        Delete
                    </button>
                    </div>
                </div>
        )}
    </div>
  )
}

export default Schedule