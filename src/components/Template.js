  import React from 'react'
  import bg from '../assets/White_Bg.jpg'
  import SignupForm from './SignupForm'
  import LoginForm from './LoginForm'
  import {FcGoogle} from 'react-icons/fc'
 
   
  const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {
    return (
    <div className='flex justify-between w-11/12 max-w-[1000px] py-4 mx-auto '>

        {/* Title and Description */}
        <div className='w-11/12 max-w-[450px]'>
            <h1 
            className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'
            >{title}</h1>

            <p className='text=[1.25rem leading[1.625rem] mt-4'>
                <span className='text-richblack-100'>{desc1}</span>
                <br/>
                <span className='text-blue-100 italic'>{desc2}</span>
            </p>

            {formtype === "signup" ?
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='h-[1px] w-full bg-richblack-700'></div>
                <p className='text-richblack-700 font-medium leading[1.375rem]'>OR</p>
                <div className='h-[1px] w-full bg-richblack-700'></div>
            </div>

            <button className='w-full flex justify-center items-center text-richblack-100 rounded-[8px]
            font-medium border border-richblack-700 px-[8px] gap-x-2 mt-5'>
            <FcGoogle/>
                Sign in with Google
            </button>

        </div>

        {/* Both Images */}
        <div className='relative w-11/12 max-w-[450px]'>
            <img src={bg} 
            alt="Bg_image"
            width={558}
            height={584}
            loading="lazy"/>

            <img src={image} 
            alt="stu_image"
            width={558}
            height={490}
            loading="lazy"
            className='absolute -top-2 right-2'
            />
        </div>

      </div>
    )
  }

  export default Template;
  