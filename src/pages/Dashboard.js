import React from 'react'
// import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function loginHandler() {
  <Navigate to="/login"/>
  }
const Dashboard = () => {
  return (
    
    <div>
    <div className='flex items-center justify-center
    text-richblack-900 text-3xl h-full'>
      Welcome to Attendece Tracker
    </div>
    <div className='flex justify-center items-center'>
    {/* <Link to='/Login'> */}
    <button onClick={loginHandler} className='bg-blue-500 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-3 '>
            Sign In
        </button>
    {/* </Link> */}
    </div>
    </div>
  )
}

export default Dashboard;
