import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../Components/Spinner'


const UpdateMedicals = () => {
  const { userInfo } = useSelector((state) => state.auth)

  const [bloodType, setBloodType] = useState('')
  const [disease, setDisease] = useState('')
  const [epilepsy, setEpilepsy] = useState('')
  const [organ, setOrgan] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [conditions, setConditions] = useState('')
  const [allergies, setAllergies] = useState('')

  // useEffect(() => {
  //   const fetchMedicalDetails = async () => {
  //     try {
  //     // console.log(scheduleId);
  //     const res = await getMedicine().unwrap()
  //     setName(res.name)
  //     setType(res.type)
  //     setDosage(res.dosage)
  //     setDuration(res.duration)
  //     setIntervalValue(res.intervalValue)
  //     setStart(formattedDate)
  //     setExtraTime(res.extraTime)
  //     setWhen(res.when)
  //     // console.log(res);
  //     } catch (error) {
  //       console.error('Error fetching medicine:', error);
  //     }
  //   }

  //   fetchMedicalDetails()
  // }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(bloodType, disease, epilepsy, organ, height, weight, conditions, allergies);
    console.log('Success!!');
    // const user = userInfo._id
    // const id = scheduleId
    // console.log(user);
    // console.log(id);

    // try {
    //   const res = await updateMedicine({ 
    //     id,
    //     data: {
    //       user, name, type, dosage, duration, intervalValue, start, extraTime, when 
    //     } 
    //   }).unwrap()
    //   console.log(res);
    //   if (res) {
    //     navigate('/schedule')
    //     toast.success('Medication Updated Successfully')
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    //   toast.error(error.message || error?.error || 'An error occurred');
    // }
  }
  

  return (
    <div className='p-5'>
      
      <div className="flex">
        <img
            className="w-12 h-12 rounded-full dark:bg-gray-500 aspect-square"
            src={'https://source.unsplash.com/150x150/?portrait?3'} 
        />
        <div className='mx-2'>
            <p className="text-lg font-semibold">{userInfo.firstname} {userInfo.lastname}</p>
            <p className="text-sm dark:text-gray-400">{userInfo.country} {userInfo.gender}</p>
        </div>
      </div>

      <div className="border-b-2 mt-2"></div>
      <p className="mt-2 font-semibold text-md">Medical Details</p>

      <form onSubmit={handleSubmit} action="">
        <div className='mt-3'>
          <h1 className='font-semibold'>Blood Type</h1>
          <p className='text-sm text-gray-500'>Select your blood group in the options below</p>
          
          <div className='mt-1 flex'>
            <div className="flex items-center">
              <input
                id="default-radio-1"
                type="radio"
                onChange={(e) => setBloodType(e.target.value)}
                checked={bloodType === 'O+'}
                name="bloodType"
                value='O+'
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor="default-radio-1" className="ms-1 text-xl font-medium text-gray-900 dark:text-gray-300">
                O+
              </label>
            </div>
            <div className="flex items-center mx-5">
              <input
                id="default-radio-2"
                type="radio"
                onChange={(e) => setBloodType(e.target.value)}
                checked={bloodType === 'O-'}
                name="bloodType"
                value='O-'
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor="default-radio-2" className="ms-1 text-xl font-medium text-gray-900 dark:text-gray-300">
                O-
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="default-radio-3"
                type="radio"
                onChange={(e) => setBloodType(e.target.value)}
                checked={bloodType === 'AB+'}
                name="bloodType"
                value='AB+'
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor="default-radio-3" className="ms-1 text-xl font-medium text-gray-900 dark:text-gray-300">
                AB+
              </label>
            </div>

            <div className="flex items-center mx-5">
              <input
                id="default-radio-4"
                type="radio"
                onChange={(e) => setBloodType(e.target.value)}
                checked={bloodType === 'B+'}
                name="bloodType"
                value='B+'
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor="default-radio-4" className="ms-1 text-xl font-medium text-gray-900 dark:text-gray-300">
                B+
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="default-radio-5"
                type="radio"
                onChange={(e) => setBloodType(e.target.value)}
                checked={bloodType === 'B-'}
                name="bloodType"
                value='B-'
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor="default-radio-5" className="ms-1 text-xl font-medium text-gray-900 dark:text-gray-300">
                B-
              </label>
            </div>
            <div className="flex items-center mx-5">
              <input
                id="default-radio-6"
                type="radio"
                onChange={(e) => setBloodType(e.target.value)}
                checked={bloodType === 'AB-'}
                name="bloodType"
                value='AB-'
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor="default-radio-6" className="ms-1 text-xl font-medium text-gray-900 dark:text-gray-300">
                AB-
              </label>
            </div>
          </div>
        </div>

        <div className="mt-4">
        <p className="font-bold text-lg">Chronic Disease</p>
          <select
            name='disease'
            value={disease}
            onChange={(e) => setDisease(e.target.value)} 
            required
            className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option defaultValue>Select a Disease</option>
              <option value="Heart Disease">Heart Disease</option>
              <option value="Stroke">Stroke</option>
              <option value="Diabetes">Diabetes</option>
              <option value="Cancer">Cancer</option>
              <option value="Obesity">Obesity</option>
              <option value="Arthritis">Arthritis</option>
              <option value="Pneumonia">Pneumonia</option>
              <option value="HIV/AIDS">HIV/AIDS</option>
              <option value="Alzheimer's Disease">Alzheimer's Disease</option>
          </select>
        </div>

        <div className='mt-4'>
          <h1 className='font-bold text-lg'>Epilepsy</h1>
          <p className='text-sm text-gray-500'>Select the options below if you have epilepsy</p>
          <div className='flex mt-2'>
            <div className="flex items-center me-4">
              <input 
                id="epilepsy-1" 
                type="checkbox" 
                checked={epilepsy === 'Yes'}
                value='Yes'
                onChange={(e) => setEpilepsy(e.target.value)} 
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
              />
              <label htmlFor="epilepsy-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">YES</label>
            </div>
            <div className="flex items-center mx-4">
              <input 
                id="epilepsy-2" 
                type="checkbox" 
                value='No'
                checked={epilepsy === 'No'}
                onChange={(e) => setEpilepsy(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
              />
              <label htmlFor="epilepsy-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">NO</label>
            </div>
          </div>
        </div>

        <div className='mt-4'>
          <h1 className='font-bold text-lg'>Organ Donor</h1>
          <p className='text-sm text-gray-500'>Select the options below if you have an organ donor</p>
          <div className='flex mt-2'>
            <div className="flex items-center me-4">
              <input 
                id="organ-3" 
                type="checkbox" 
                value='Yes'
                checked={organ === 'Yes'}
                onChange={(e) => setOrgan(e.target.value)} 
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
              />
              <label htmlFor="organ-3" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">YES</label>
            </div>
            <div className="flex items-center mx-4">
              <input 
                id="organ-4" 
                type="checkbox" 
                value='No'
                checked={organ === 'No'}
                onChange={(e) => setOrgan(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
              />
              <label htmlFor="organ-4" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">NO</label>
            </div>
          </div>
        </div>        

        <div className="mt-3">
          <label htmlFor="weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weight</label>
          <input
              id='weight'
              type="text"
              name="weight"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your weight"
              required
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <div className="mt-3">
          <label htmlFor="height" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Height</label>
          <input
              id='height'
              type="text"
              name="height"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Input height"
              required
              value={height}
              onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        <div className='border-b-2 border-slate-400 mt-5'></div>
        <h1 className='text-xl font-bold mt-2'>Conditions & Allergies</h1>

        <div className="mt-3">
          <label htmlFor="conditions" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Medical Conditions</label>
          <input
              id='conditions'
              type="text"
              name="conditions"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="High Blood Pressure?"
              required
              value={conditions}
              onChange={(e) => setConditions(e.target.value)}
          />
        </div>

        <div className="mt-3">
          <label htmlFor="allergies" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Allergies & Reactions</label>
          <input
              id='allergies'
              type="text"
              name="allergies"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Input allergies"
              required
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
          />
        </div>

        {/* { isLoading && <LoadingSpinner />} */}

        <div className="mt-5">
            <button className="text-white text-[15px] text-center rounded-lg w-full focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
               SAVE & UPDATE 
            </button>
        </div>

      </form>

    </div>
  )
}

export default UpdateMedicals