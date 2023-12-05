import React, { useEffect, useState } from 'react'
import {toast} from 'react-toastify'

const Add_medicine = () => {
  const [medicine, setMedicine] = useState({
    name: "",
    type: "",
    dosage: "",
    duration: "",
    interval: "",
    start: "",
    extraTime: "",
    when: ""
  })

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setMedicine(prevState => {
      return {
        ...prevState,
        [name] : type === 'checkbox' ? checked : value
      }
    })
  }

  // const [name, setName] = useState('')
  // const [type, setType] = useState('')
  // const [dosage, setDosage] = useState('')
  // const [duration, setDuration] = useState('')
  // const [interval, setInterval] = useState('')
  // const [start, setStart] = useState('')
  // const [extraTime, setExtraTime] = useState('')
  // const [when, setWhen] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(medicine);
    setMedicine({
      name: "",
      type: "",
      dosage: "",
      duration: "",
      interval: "",
      start: "",
      extraTime: "",
      when: ""
    })
    toast.success('Medication Added Successfully')
  }

  return (
       <div className="p-5">
        <form onSubmit={handleSubmit} action="">
            <div>                
                <p className="font-bold text-xl">Add Medicine</p>
                <p className='text-sm'>Alarm notification is automatic when Scheduling reminders</p>
            </div>
            <div className="mt-3">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
              <input
                  type="text"
                  name="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Input medicine name here"
                  required
                  value={medicine.name}
                  onChange={handleChange}
              />
            </div>

            <div className='mt-3 flex'>
              <div className="flex items-center">
                <input
                  id="default-radio-1"
                  type="radio"
                  checked={medicine.type === "Pill"}
                  onChange={handleChange}
                  name="type"
                  value='Pill'
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="default-radio-1" className="ms-1 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Pill
                </label>
              </div>
              <div className="flex items-center mx-3">
                <input
                  id="default-radio-2"
                  type="radio"
                  checked={medicine.type === "Syrup"}
                  onChange={handleChange}
                  name="type"
                  value='Syrup'
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="default-radio-2" className="ms-1 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Syrup
                </label>
              </div>
            </div>

            <div className="mt-4">
                <p className="font-bold text-md">Dosage and Duration</p>
                <p className='text-mute text-sm'>Select the amount of pills to be taken and how long</p>

                <div className="mt-3 flex">
                  <select
                    name='dosage' 
                    value={medicine.dosage}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option defaultValue>Choose a Dosage</option>
                      <option value="one pill">1 Pill</option>
                      <option value="two pills">2 Pills</option>
                      <option value="three pills">3 Pills</option>
                      <option value="four pills">4 Pills</option>
                      <option value="five pills">5 Pills</option>
                      <option value="5ml">5ml</option>
                      <option value="10ml">10ml</option>
                      <option value="15ml">15ml</option>
                  </select>
                </div>

                <div className="mt-3">
                  {/* <label htmlFor="duration" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Duration</label> */}
                  <input
                      type="text"
                      name="duration"
                      id="duration"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="How many days/weeks will it take to finish the medicine?"
                      required
                      value={medicine.duration}
                      onChange={handleChange}
                  />
                </div>
            </div>


            <div className="mt-4">
                <p className="font-bold text-lg">Days Interval</p>
                  <select 
                    name="interval"
                    value={medicine.interval}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option defaultValue>Choose an Interval</option>
                      <option value="every 2 hours">Every 2 hours</option>
                      <option value="every 3 hours">Every 3 hours</option>
                      <option value="every 4 hours">Every 4 hours</option>
                      <option value="every 5 hours">Every 5 hours</option>
                      <option value="every 7 hours">Every 7 hours</option>
                      <option value="every 8 hours">Every 8 hours</option>
                      <option value="every 12 hours">Every 12 hours</option>
                  </select>
            </div>

            <div className="mt-4">
                <p className="font-bold text-lg">Date and Time</p>
                <p className='text-sm'>Add when you need to start taking your medicines</p>

                <div className="mt-3">
                    <input 
                      type="date"
                      name='start'
                      value={medicine.start}
                      onChange={handleChange}
                      required
                      className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' 
                    />
                </div>
            </div>

            <div className="mt-5">
              <label htmlFor="time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Time</label>
                <input
                    type="text"
                    name="extraTime"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Need to take medicines via time interval? add more time"
                    value={medicine.extraTime}
                    onChange={handleChange}
                />
            </div>

            <div className="mt-4">
                <p className="font-bold text-lg">Food & Pill</p>
                <p className='text-sm'>Need to take medicines via time interval? add more time</p>

                <div className="flex items-center mt-1">
                  <input
                    id="default-radio-3"
                    type="radio"
                    checked={medicine.when === 'Take before meal'}
                    value='Take before meal'
                    onChange={handleChange}
                    name="when"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="default-radio-3" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Take before meal
                  </label>
                </div>

                <div className="flex items-center my-2">
                  <input
                    id="default-radio-4"
                    type="radio"
                    checked={medicine.when === 'Take in between meal'}
                    value='Take in between meal'
                    onChange={handleChange}
                    name="when"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="default-radio-4" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Take in between meal
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="default-radio-5"
                    type="radio"
                    checked={medicine.when === 'Take after meal'}
                    value='Take after meal'
                    onChange={handleChange}
                    name="when"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="default-radio-5" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Take after meal
                  </label>
                </div>

            </div>

            <div className="mt-5">
                <button className="text-white text-[15px] text-center rounded-lg w-full focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                  SCHEDULE
                </button>
            </div>
            </form>
        </div>
  )
}

export default Add_medicine