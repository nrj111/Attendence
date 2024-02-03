import React from 'react'
import AcroLogo from "../assets/Acropolis.png"
import { Link } from 'react-router-dom'
import {toast} from "react-hot-toast"

const Navbar = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-between w-11/12 max-w-[1000px] py-4 mx-auto '>
        <Link to = "/">
            <img src={AcroLogo} alt='Logo' width={160} height={32} loading="lazy"></img>
        </Link>

        <nav>
            <ul className='flex gap-x-6 text-richblack-900'  >
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>


        {/* buttons */}
        <div className='flex gap-x-4'>
            { !isLoggedIn &&
                <Link to="/login">
                    <button className='bg-blue-500 text-richblack-900 py-[8px]
                     px-[12px] rounded-[8px] font-medium'>
                        Log in
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup">
                    <button className='bg-blue-500 text-richblack-900 py-[8px]
                     px-[12px] rounded-[8px] font-medium'>
                        Sign up
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px]
                     px-[12px] rounded-[8px] border border-richblack-700'
                     onClick={() => {
                    setIsLoggedIn (false);
                    toast.success(" Logged Out");
                    }}>
                        Logout 
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px]
                     px-[12px] rounded-[8px] border border-richblack-700'>
                        Dashboard
                    </button>
                </Link>
            }
        </div>

    </div>
  )
}

export default Navbar;