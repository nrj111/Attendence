import React from 'react'
import Template from '../components/Template'
import signupImg from '../assets/signup.png'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Student Attendence Tracker"
      desc1="One stop platfrom to maintain Disclipline"
      desc2="Maintain Attendence Digitally!"
      image={signupImg}
      formtype="signup"
      setIsLoggedIn = {setIsLoggedIn}

    />
  )
}

export default Signup;
