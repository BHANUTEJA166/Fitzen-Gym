

// “In React Router, / represents the root path of the application. It is usually mapped to the home component, so using Link to="/" navigates the user back to the home page.”

import React from 'react'
import errorImg from '../assets/images/errorImg.gif'
import { Link } from 'react-router-dom'

const NoPageF = () => {
  return (
    <div className='container p-5 text-center'>
      <Link to="/">
        <img src={errorImg} alt='nopage' className='w-50'/>
      </Link>
    </div>
  )
}

export default NoPageF
