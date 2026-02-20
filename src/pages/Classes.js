import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Classes = () => {
   const[data,setData] = useState([])
   useEffect(() => {
    axios.get(`http://localhost:5000/Classes`)
    .then((res) => setData(res.data))
    .catch((err) => {
      console.log(err)
    })
}, []);

  return (
   <section class="py-5 bg-white" id="classes">
  <div class="container">
    <div class="text-center mb-5">
      <h2 class="fw-bold">Our Classes</h2>
      <p class="text-muted">Designed for every body, every level — choose your path to wellness.</p>
    </div>

    <div class="row g-4">
    {data.map((item,index) => {
      return(
         <div class="col-md-4" key={index}>
        <div class="card h-100 border-0 shadow-sm">
          <div className='card-header'>
            <h5 className='text-danger'>{item.level}</h5>
          </div>
          <div class="card-body">
            <h5 class="card-title">{item.title}</h5>
            <Link to={`/classdetails/${item.id}`}> 
            <button className='btn btn-outline-primary mt-2' >Know More</button>
            </Link>
          </div>
        </div>
      </div>
      )
    })}


    </div>
  </div>
</section>


  )
}

export default Classes