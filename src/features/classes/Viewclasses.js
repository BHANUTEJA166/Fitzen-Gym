import React, { useEffect, useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {
  getClasses,
  getClassById,
  updateClass,
  deleteClass
} from '../../services/fzService'

const Viewclasses = () => {
  const [classes, setClasses] = useState([])
  const [clas, setClas] = useState({ id:'', title:'', level:'', duration:'' })

  useEffect(() => {
    getClasses()
      .then((res) => setClasses(res.data))
      .catch((err) => console.log(err))
  }, [])

  const deleteCla = (cid) => {
    deleteClass(cid)
      .then(() => {
        alert('Class Deleted')
        setClasses(prevClasses => prevClasses.filter(c => c.id !== cid))
      })
      .catch((err) => console.log(err))
  }

  const getOneRecord = (cid) => {
    getClassById(cid)
      .then((res) => {
        setClas({ ...res.data, id: cid })
      })
      .catch((err) => console.log(err))
  }

  const changeData = (e) => {
    setClas({ ...clas, [e.target.name]: e.target.value })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    updateClass(clas.id, clas)
      .then(() => {
        alert('Class Updated')
      })
      .catch((err) => console.log(err))
  }

  const { title, level, duration } = clas

  return (
    <section className='container p-5'>
      <h1 className='text-center m-5'>CLASSES</h1>
      <table className='table table-bordered table-hover shadow'>
        <thead className='table-dark'>
          <tr>
            <th>NAME</th>
            <th>LEVEL</th>
            <th>DURATION</th>
            <th>DESCRIPTION</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((cla, index) => {
            return (
              <tr key={index}>
                <td>{cla.title}</td>
                <td>{cla.level}</td>
                <td>{cla.duration}</td>
                <td>{cla.description}</td>
                <td>
                  <button onClick={() => getOneRecord(cla.id)} data-bs-target='#Update' data-bs-toggle='modal' className='btn btn-primary mb-2'>
                    <i className="bi bi-pencil"></i>
                  </button>
                  <button onClick={() => deleteCla(cla.id)} className='btn btn-danger'>
                    <i className="bi bi-trash3"></i>
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <div className='modal fade' id='Update' data-bs-backdrop='static'>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5>UPDATE CLASS</h5>
              <button className='btn btn-close' data-bs-dismiss='modal'></button>
            </div>
            <div className="modal-body">
              <form onSubmit={submitHandler}>
                <input onChange={changeData} type="text" name='title' value={title} placeholder='Class Name' className='form-control mb-3' />
                <input onChange={changeData} type="text" name='duration' value={duration} placeholder='Class Duration' className='form-control mb-3' />
                <input onChange={changeData} type="text" name='level' value={level} placeholder='Class Level' className='form-control mb-3' />
                <input type="submit" data-bs-dismiss="modal" className='btn btn-success' />
              </form>
            </div>
            <div className='modal-footer'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Viewclasses
