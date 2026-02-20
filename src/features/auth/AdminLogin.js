import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginData } from '../../app/App'

const AdminLogin = () => {
   const [details, setDetails] = useState({ email: '', password: '' })
   const [, setLogin] = useContext(loginData)
   const navigate = useNavigate()

   const changeData = (e) => {
     setDetails({ ...details, [e.target.name]: e.target.value })
   }

   const submitHandler = (e) => {
     e.preventDefault()

     const { email, password } = details

     if (email === 'admin@fz.com' && password === 'admin') {
        setLogin(true)
        navigate('/dashboard')
     } else {
        alert('Invalid Credentials')
     }
   }

   return (
     <div className='container p-5'>
       <div className='col-lg-6 shadow p-5 mx-auto'>
         <form onSubmit={submitHandler}>
           <input
             type="email"
             onChange={changeData}
             name="email"
             value={details.email}
             placeholder='Email Address'
             className='form-control mb-3'
           />
           <input
             type="password"
             onChange={changeData}
             name="password"
             value={details.password}
             placeholder='Password'
             className='form-control mb-3'
           />
           <input
             type="submit"
             className='form-control mb-3 btn btn-success'
           />
         </form>
       </div>
     </div>
   )
}

export default AdminLogin

// Destructuring at top:

// Runs on every render

// Values update automatically

// Destructuring inside handler:

// Runs only when function is called

// Reads current state at that moment

// “In this case, return is not needed because the function is used for side effects like updating state and navigation. Event handlers don’t need to return a value unless we want to exit early or pass data to another function.”