import React, { useEffect, useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {
  getSchedules,
  getScheduleById,
  addSchedule as addScheduleService,
  updateSchedule,
  deleteSchedule
} from '../../services/fzService'

const Viewschedules = () => {

  const [schedules, setSchedules] = useState([])
  const [schedule, setSchedule] = useState({ id:'', class:'', time:'', day:'', trainer:'', status:'' })

  useEffect(() => {
    getSchedules()
      .then((res) => {
        setSchedules(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  const deleteSch = (sid) => {
    deleteSchedule(sid)
      .then(() => {
        alert('Schedule deleted')
        setSchedules(prevschedules => prevschedules.filter(s => s.id !== sid))
      })
      .catch((err) => console.log(err))
  }

  const changeData = (e) => {
    setSchedule({ ...schedule, [e.target.name]: e.target.value })
  }

  const getOneRecord = (sid) => {
    getScheduleById(sid)
      .then((res) => {
        setSchedule({ ...res.data, id: sid })
      })
      .catch((err) => console.log(err))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    updateSchedule(schedule.id, schedule)
      .then(() => {
        alert("Schedule Updated")
      })
      .catch((err) => console.log(err))
  }

  const addSchedule = (e) => {
    e.preventDefault()
    addScheduleService(schedule)
      .then((res) => {
        setSchedules([...schedules, res.data])
        alert("Schedule Added")
      })
      .catch((err) => console.log(err))
  }

  const clearData = () => {
    setSchedule({ id:'', class:'', time:'', day:'', trainer:'', status:'' })
  }

  return (
    <section className='container p-5'>
      <h1 className='text-center mb-5'>ADD SCHEDULES</h1>

      <div className='text-end mb-3'>
        <button onClick={clearData} data-bs-toggle="modal" data-bs-target="#AddSchedule" className='btn btn-success'>
          <i className="bi bi-plus-circle me-2"></i>Add Schedule
        </button>
      </div>

      <table className='table table-bordered table-hover shadow'>
        <thead className='table-dark'>
          <tr>
            <th>CLASS</th>
            <th>TIME</th>
            <th>DAY</th>
            <th>TRAINER</th>
            <th>STATUS</th>
            <th>ACTION</th>
          </tr>
        </thead>

        {schedules.map((sch, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td>{sch.class}</td>
                <td>{sch.time}</td>
                <td>{sch.day}</td>
                <td>{sch.trainer}</td>
                <td>{sch.status}</td>
                <td>
                  <button onClick={() => getOneRecord(sch.id)} data-bs-target="#Update" data-bs-toggle="modal" className='btn btn-primary me-3'>
                    <i className="bi bi-pencil"></i>
                  </button>
                  <button onClick={() => deleteSch(sch.id)} className='btn btn-danger'>
                    <i className="bi bi-trash3"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          )
        })}
      </table>

      <div className='modal fade' id='Update' data-bs-backdrop='static'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5>Updated Schedule</h5>
              <button className='btn btn-close' data-bs-dismiss='modal'></button>
            </div>
            <div className='modal-body'>
              <form onSubmit={submitHandler}>
                <input type="text" onChange={changeData} name="class" value={schedule.class} placeholder='Class Name' className='form-control mb-3'/>
                <input type="text" onChange={changeData} name="time" value={schedule.time} placeholder='Class Time' className='form-control mb-3'/>
                <input type="text" onChange={changeData} name="day" value={schedule.day} placeholder='Class Day' className='form-control mb-3'/>
                <input type="text" onChange={changeData} name="trainer" value={schedule.trainer} placeholder='Trainer Name' className='form-control mb-3'/>
                <input type="text" onChange={changeData} name="status" value={schedule.status} placeholder='Status (active/cancelled)' className='form-control mb-3'/>
                <input type="submit" className='btn btn-success' data-bs-dismiss='modal'/>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className='modal fade' id='AddSchedule' data-bs-backdrop='static'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5>Add Schedule</h5>
              <button className='btn btn-close' data-bs-dismiss='modal'></button>
            </div>
            <div className='modal-body'>
              <form onSubmit={addSchedule}>
                <input type="text" onChange={changeData} name="class" value={schedule.class} placeholder='Enter Class Name' className='form-control mb-3'/>
                <input type="text" onChange={changeData} name="time" value={schedule.time} placeholder='Enter Time ' className='form-control mb-3'/>
                <input type="text" onChange={changeData} name="day" value={schedule.day} placeholder='Enter Day ' className='form-control mb-3'/>
                <input type="text" onChange={changeData} name="trainer" value={schedule.trainer} placeholder='Enter Trainer Name' className='form-control mb-3'/>
                <input type="text" onChange={changeData} name="status" value={schedule.status} placeholder='Enter Status ' className='form-control mb-3'/>
                <input type="submit" className='btn btn-success' data-bs-dismiss='modal'/>
              </form>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Viewschedules
