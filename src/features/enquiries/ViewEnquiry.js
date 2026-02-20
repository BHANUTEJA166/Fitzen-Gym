import React, { useEffect, useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';

const ViewEnquiry = () => {
  const[enquiries, setEnquiries] = useState([]);
  const [ enquiry, setEnquiry] = useState({ id:'', name:'', email:'', mobile:'',message:''  })


  useEffect(() =>{
    axios.get(`http://localhost:5000/Enquiries`)
    .then((res) => setEnquiries(res.data))
    .catch((err) => console.log(err))
  },[])

  const deleteEnq = (eid) => {
    axios.delete(`http://localhost:5000/Enquiries/${eid}`)
    .then(() => {
      alert('Enquiry Deleted')
    })
  }
const getOneRecord = (eid) => {
  axios.get(`http://localhost:5000/Enquiries/${eid}`)
  .then((res) =>{
    setEnquiry({...res.data, id:eid})
  })
  .catch((err) => console.log(err))
}

const changeData = (e) => {
  setEnquiry({...enquiry,[e.target.name]:e.target.value})
}

 const submitHandler = (e) => {
  e.preventDefault();
  console.log(enquiry);
  axios.put(`http://localhost:5000/Enquiries/${enquiry.id}`,enquiry)
  .then(() => {
    alert('Enquiry Updated')
  })
 }

 const { name, email, mobile, message } = enquiry
  return (
    <section className='container p-5'>
        <h1 className='text-center mb-5'>ENQUIRIES</h1>
        <table className='table table-bordered table-hover shadow'>
        <thead className='table-dark'>
            <tr>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>NUMBER</th>
              <th>MESSAGE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
          {enquiries.map((enq, index) => {
            return(
              <tr key={index}>
                <td>{enq.name}</td>
                <td>{enq.email}</td>
                <td>{enq.mobile}</td>
                <td>{enq.message}</td>
                <td>
                <button onClick={() => getOneRecord (enq.id)} data-bs-target='#Update' data-bs-toggle='modal' className='btn btn-primary me-3'><i className="bi bi-pencil"></i></button>
                <button onClick={() => deleteEnq(enq.id)} className='btn btn-danger'><i className="bi bi-trash3"></i></button>
              </td>
              </tr>
            )
          })}
          </tbody>
        </table>
        <div className='modal fade' id="Update" data-bs-backdrop='static'>
          <div className='modal-dialog'>
            <div className='modal-content'>
            <div className='modal-header'>
              <h5>Updated Enquiry</h5>
              <button className='btn btn-close' data-bs-dismiss='modal'></button>
            </div>
            <div className='modal-body'>
              <form onSubmit={submitHandler}>
              <input type="text" name="name" onChange={changeData} value={name} placeholder='Enter Name' className='form-control mb-3'/>
              <input type="email" name="email" onChange={changeData} value={email} placeholder='Email Address' className='form-control mb-3'/>
              <input type="number" name="mobile" onChange={changeData}  value={mobile} placeholder='Mobile Number' className='form-control mb-3'/>
              <input type="text" name="message" onChange={changeData}  value={message} placeholder='Enter Message' className='form-control mb-3'/>
              <input type="submit" className='btn btn-success'  data-bs-dismiss='modal' />
              </form>
            </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default ViewEnquiry