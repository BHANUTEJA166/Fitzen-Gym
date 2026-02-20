// import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
// import { Outlet } from 'react-router-dom'
// import AdminLogin from '../auth/AdminLogin'
// import { loginData } from '../../App'

// const Dashboard = () => {
//   const [login] = useContext(loginData)
//   if(login) {
//       return (
//     <section className='container-fluid'>
//         <div className='row'>
//          <aside className='col-lg-3'>
//             <h3>Admin Dashboard</h3>
//             <Link to={'addclass'}>
//              <button>Add Class</button>
//             </Link>
//             <Link to={'viewclasses'}>
//              <button>View Classes</button>
//             </Link>
//             <Link to={'addschedules'}>
//              <button>Add Schedules</button>
//             </Link>
//             <Link to={'viewschedules'}>
//              <button>View Schedules</button>
//             </Link>
//             <Link to={'addtrainer'}>
//              <button>Add Trainer</button>
//             </Link>
//             <Link to={'viewtrainer'}>
//              <button>View Trainer</button>
//             </Link>
//             <Link to={'viewenquiries'}>
//              <button>View Enquiries</button>
//             </Link>
//              </aside>
//          <div className='col-lg-9'>
//             <Outlet/>
//          </div>
//         </div>
//     </section>
//   )
// }
//  else {
//   return (
//     <AdminLogin/>
//   )
//  }
//   }


// export default Dashboard


import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import AdminLogin from '../auth/AdminLogin'
import { loginData } from '../../app/App'

const Dashboard = () => {
  const [login] = useContext(loginData)
  if(login) {
      return (
    <section className='container-fluid'>
        <div className='row'>
         <aside className='col-lg-3'>
            <h3>Admin Dashboard</h3>
            <Link to={'addclass'}>
             <button>Add Class</button>
            </Link>
            <Link to={'viewclasses'}>
             <button>View Classes</button>
            </Link>
            <Link to={'addschedules'}>
             <button>Add Schedules</button>
            </Link>
            <Link to={'viewschedules'}>
             <button>View Schedules</button>
            </Link>
            <Link to={'addtrainer'}>
             <button>Add Trainer</button>
            </Link>
            <Link to={'viewtrainer'}>
             <button>View Trainer</button>
            </Link>
            <Link to={'viewenquiries'}>
             <button>View Enquiries</button>
            </Link>
             </aside>
         <div className='col-lg-9'>
            <Outlet/>
         </div>
        </div>
    </section>
  )
}
 else {
  return (
    <AdminLogin/>
  )
 }
}

export default Dashboard

// setlogin(true) updates the state, and login holds the updated value.
// You never read from the setter — you always read from the state variable.