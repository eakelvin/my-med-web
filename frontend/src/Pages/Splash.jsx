import React from 'react'
import { Link } from 'react-router-dom'

const Splash = () => {
  return (
    <>
    <Link to='/onboarding1'>
        <div className='flex justify-center items-center'>
            <img src="./mymed.png" alt="" />
        </div>
    </Link>
    </>
  )
}

export default Splash