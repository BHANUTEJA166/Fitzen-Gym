import axios from 'axios';
import React, { useState } from 'react'

const SendEnquiryF = () => {

  const [enquiry , setEnquiry] = useState({ name:'', mobile:'' , email:'' , message: '' });

  const changeData = (e)=> {
    setEnquiry({
      ...enquiry,[e.target.name]: e.target.value
    })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(enquiry)
    axios.post(`http://localhost:5000/Enquiries`, enquiry)
    .then (() => {
      alert("Sent Enquiry")
      setEnquiry({ name:'', mobile:'' , email:'' , message: '' });
    })
    .catch((err) => {
      console.log(err)
    })

    const { name, mobile } = enquiry

    const nameError = document.getElementById('nameError')
    const mobileError = document.getElementById('mobileError')

    const nameExp =/^[a-zA-Z\s]+$/;
    const numExp = /^[0-9]+$/;

    //Name Validation
    if (name === "") {
      nameError.textContent = "Name is Mandatory";
    }
    else {
      if (name.match(nameExp)) {
        nameError.textContent = "";
      }
      else {
        nameError.textContent = "Name should be alphabetics";
      }
    }

    //Mobile Validation
    if (mobile === "") {
      mobileError.textContent = "Mobile Number is Mandatory";
    }
    else {
      if (mobile.match(numExp)) {
        if (mobile.length === 10 ) {
          mobileError.textContent= "";
        }
        else {
          mobileError.textContent = "Mobile Number should be 10 digits";
        }
      }
      else {
        mobileError.textContent = "Mobile Number should be numeric";
      }
    }
  }
const { name, mobile , email, message } = enquiry
  return (
    <div>
        <form onSubmit={submitHandler}>
            <input type='text' name='name' value={name} onChange={changeData} placeholder='Enter Name' className='form-control mb-3'/>
            <p id= 'nameError' className='text-danger'></p>

            <input type='email' value={email} name='email' onChange={changeData} placeholder='Email Address' className='form-control mb-3'/>

            <input type='text' value={mobile} name='mobile' onChange={changeData} placeholder='Phone Number' className='form-control mb-3'/>
            <p id= 'mobileError' className='text-danger'></p>

            <textarea placeholder='Message' value={message} name='message' onChange={changeData} className='form-control mb-3'></textarea>

            <input type='submit' className='btn btn-success' />
        </form>
    </div>
  )
}

export default SendEnquiryF
