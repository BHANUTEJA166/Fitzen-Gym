import React, { useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { addTrainer as addTrainerService } from '../../services/fzService'

const AddTrainer = () => {

  const [trainer, setTrainer] = useState({ id:'', name:'', image:'', fullName:'', title:'', description:'' })

  const changeData = (e) => {
    setTrainer({ ...trainer, [e.target.name]: e.target.value })
  }

  const addTrainer = (e) => {
    e.preventDefault()
    addTrainerService(trainer)
      .then(() => {
        alert("Trainer Added")
        setTrainer({ id:'', name:'', image:'', fullName:'', title:'', description:'' })
      })
      .catch((err) => console.log(err))
  }

  const clearData = () => {
    setTrainer({ id:'', name:'', image:'', fullName:'', title:'', description:'' })
  }

  return (
    <section className='container p-5'>
      <h1 className='text-center mb-4'>ADD TRAINER</h1>

      <div className='text-center'>
        <button onClick={clearData} data-bs-toggle="modal" data-bs-target="#AddTrainerModal" className='btn btn-success'>
          <i className="bi bi-plus-circle me-2"></i>Add Trainer
        </button>
      </div>

      <div className='modal fade' id='AddTrainerModal' data-bs-backdrop='static'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5>Add Trainer</h5>
              <button className='btn btn-close' data-bs-dismiss='modal'></button>
            </div>
            <div className='modal-body'>
              <form onSubmit={addTrainer}>
                <input type="text" onChange={changeData} name="image" value={trainer.image} placeholder='Enter Image Path' className='form-control mb-3'/>
                <input type="text" onChange={changeData} name="fullName" value={trainer.fullName} placeholder='Enter Full Name' className='form-control mb-3'/>
                <input type="text" onChange={changeData} name="title" value={trainer.title} placeholder='Enter Title' className='form-control mb-3'/>
                <input type="text" onChange={changeData} name="description" value={trainer.description} placeholder='Enter Description' className='form-control mb-3'/>
                <input type="submit" className='btn btn-success' data-bs-dismiss='modal'/>
              </form>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default AddTrainer
