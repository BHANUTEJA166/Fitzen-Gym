import React from 'react'
import useCallApiF from '../../shared/CallApiF'

const WelcomeF = () => {
  const Classes = useCallApiF('Classes')
  const Schedules = useCallApiF('Schedules')
  const Trainers = useCallApiF('Trainers')
  const Enquiries = useCallApiF('Enquiries')

  return (
    <div className='h-100 p-5 text-center align-items-center '>
      <div className='container'>
        <h1 className='mb-5'>Welcome to Admin Login</h1>
        <div className='row'>
          <div className='col-md-6 col-lg-4 col-xl-3 '>
            <div className='card'>
              <div className='card-body'>
                <h1 className='card-title'>{Classes.length}+</h1>
                <h5>Classes </h5>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-4 col-xl-3'>
            <div className='card'>
              <div className='card-body'>
                <h1 className='card-title'>{Schedules.length}+</h1>
                <h5>Schedules</h5>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-4 col-xl-3'>
            <div className='card'>
              <div className='card-body'>
                <h1 className='card-title'>{Trainers.length}</h1>
                <h5>Trainers</h5>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-4 col-xl-3'>
            <div className='card'>
              <div className='card-body'>
                <h1 className='card-title'>{Enquiries.length}</h1>
                <h5>Enquiries </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeF
