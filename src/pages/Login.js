import React from 'react'
import Template from '../components/Template'
import loginImg from '../assets/login.png'

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Student Attendence Tracker"
      desc2="One stop platfrom to maintain disclipline"
      image={loginImg}
      formtype="login"
      setIsLoggedIn = {setIsLoggedIn}

    />
  )
}

export default Login;
