import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getClasses } from '../services/fzService'

const Classes = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    getClasses()
      .then((res) => setData(res.data))
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <section className="py-5 bg-white" id="classes">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Classes</h2>
          <p className="text-muted">Designed for every body, every level — choose your path to wellness.</p>
        </div>

        <div className="row g-4">
          {data.map((item, index) => {
            return (
              <div className="col-md-4" key={index}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className='card-header'>
                    <h5 className='text-danger'>{item.level}</h5>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <Link to={`/classdetails/${item.id}`}>
                      <button className='btn btn-outline-primary mt-2'>Know More</button>
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
