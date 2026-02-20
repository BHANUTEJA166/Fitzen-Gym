import axios from 'axios'
import React, { useEffect, useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';

const Viewtrainers = () => {
 const[trainers,setTrainers ] = useState([])
 const[trainer, setTrainer] = useState({ id:'', name:'', image:'', fullName:'', title:'', description:''})

 useEffect(() =>{
  axios.get('http://localhost:5000/Trainers')
  .then((res) => {
    setTrainers(res.data)
  })
  .catch((err) => console.log(err))
 })

 const deleteTr = (tid) => {
  axios.delete(`http://localhost:5000/Trainers/${tid}`)
  .then(() => {
    alert('Trainer deleted')
  })
  setTrainers(prevtrainers => prevtrainers.filter(t => t.id === tid))
 }

 const changeData = (e) => {
  setTrainer({ ...trainer, [e.target.name]:e.target.value})
 }

 const getOneRecord = (tid) => {
  axios.get(`http://localhost:5000/Trainers/${tid}`)
  .then((res) => {
    setTrainer({...res.data, id:tid})
  })
  .catch((err) => console.log(err))
 }

 const submitHandler = (e) => {
  e.preventDefault();
  axios.put(`http://localhost:5000/Trainers/${trainer.id}`,trainer)
  .then(() => {
    alert("Trainer Updated")
  })
 }
  
  return (
    <section className='container p-5'>
      <h1 className='text-center mb-5'>TRAINERS</h1>
      <table className='table table-bordered table-hover shadow'>
        <thead className='table-dark'>
          <tr>
            <th>TRAINER NAME</th>
            <th>TITLE</th>
            <th>DESCRIPTION</th>
            <th>ACTION</th>
          </tr>
        </thead>
        {trainers.map((tr,index) => {
          return(
          <tbody>
          <tr key={index}>
            <td>{tr.fullName}</td>
            <td>{tr.title}</td>
            <td>{tr.description}</td>
            <td>
            <button  onClick={()=> getOneRecord(tr.id)} data-bs-target="#Update" data-bs-toggle="modal" className='btn btn-primary mb-3'><i className="bi bi-pencil"></i></button>
            <button onClick={() => deleteTr(tr.id)} className='btn btn-danger'><i className="bi bi-trash3"></i></button>
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
              <h5>Updated Trainer</h5>
              <button className='btn btn-close' data-bs-dismiss='modal'></button>
            </div>
            <div className='modal-body'>
              <form onSubmit={submitHandler}>
                <input type="text" onChange={changeData} name="name" value={trainer.name} placeholder='Name' className='form-control mb-3'/>
                 <input type="text" onChange={changeData} name="image" value={trainer.image} placeholder='Image' className='form-control mb-3'/>
                  <input type="text" onChange={changeData} name="fullName" value={trainer.fullName} placeholder='Full Name' className='form-control mb-3'/>
                   <input type="text" onChange={changeData} name="title" value={trainer.title} placeholder='Title' className='form-control mb-3'/>
                    <input type="text" onChange={changeData} name="description" value={trainer.description} placeholder='Description' className='form-control mb-3'/>
                      <input type="submit" className='btn btn-success' data-bs-dismiss='modal'/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Viewtrainers
