import axios from 'axios'
import React, { useEffect, useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';

const Viewschedules = () => {
 const[schedules,setSchedules ] = useState([])
 const[schedule, setSchedule] = useState({ id:'', class:'', time:'', day:'',trainer: '', status:''})

 useEffect(() =>{
  axios.get('http://localhost:5000/Schedules')
  .then((res) => {
    setSchedules(res.data)
  })
  .catch((err) => console.log(err))
 })

 const deleteSch = (sid) => {
  axios.delete(`http://localhost:5000/Schedules/${sid}`)
  .then(() => {
    alert('Schedule deleted')
  })
  setSchedules(prevschedules => prevschedules.filter(s => s.id === sid))
 }

 const changeData = (e) => {
  setSchedule({ ...schedule, [e.target.name]:e.target.value})
 }

 const getOneRecord = (sid) => {
  axios.get(`http://localhost:5000/Schedules/${sid}`)
  .then((res) => {
    setSchedule({...res.data, id:sid})
  })
  .catch((err) => console.log(err))
 }

 const submitHandler = (e) => {
  e.preventDefault();
  axios.put(`http://localhost:5000/Schedules/${schedule.id}`,schedule)
  .then(() => {
    alert("Schedule Updated")
  })
 }
  
  return (
    <section className='container p-5'>
      <h1 className='text-center mb-5'>SCHEDULES</h1>
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
        {schedules.map((sch,index) => {
          return(
          <tbody>
          <tr key={index}>
            <td>{sch.class}</td>
            <td>{sch.time}</td>
            <td>{sch.day}</td>
            <td>{sch.trainer}</td>
            <td>{sch.status}</td>
            <td>
            <button  onClick={()=> getOneRecord(sch.id)} data-bs-target="#Update" data-bs-toggle="modal" className='btn btn-primary me-3'><i className="bi bi-pencil"></i></button>
            <button onClick={() => deleteSch(sch.id)} className='btn btn-danger'><i className="bi bi-trash3"></i></button>
            </td>
          </tr>
         </tbody>
          )
        })}
      </table>
      <div className='modal fade' id='Update' data-bs-backdrop='static' >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5>Updated Schedule</h5>
              <button className='btn btn-close' data-bs-dismiss='modal'></button>
            </div>
            <div className='modal-body'>
              <form onSubmit={submitHandler}>
                <input type="text" onChange={changeData} name="class" value={schedule.class} placeholder='Class Name' className='form-control mb-3'/>
                 <input type="text" onChange={changeData} name="time" value={schedule.time} placeholder='Class Name' className='form-control mb-3'/>
                  <input type="text" onChange={changeData} name="day" value={schedule.day} placeholder='Class Name' className='form-control mb-3'/>
                   <input type="text" onChange={changeData} name="trainer" value={schedule.trainer} placeholder='Class Name' className='form-control mb-3'/>
                    <input type="text" onChange={changeData} name="status" value={schedule.status} placeholder='Class Name' className='form-control mb-3'/>
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