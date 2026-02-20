import React, { useEffect, useState } from 'react'
import { getTrainers } from '../services/fzService'

const Trainers = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    getTrainers()
      .then((res) => setData(res.data))
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <section className="py-5 bg-light" id="trainers">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Expert Trainers</h2>
          <p className="text-muted">Experienced. Passionate. Here to guide your journey.</p>
        </div>

        <div className="row g-4 justify-content-center">
          {data.map((trainer, index) => {
            return (
              <div className="col-md-4" key={index}>
                <div className="card h-100 border-0 shadow-sm text-center">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="card-img-top mx-auto mt-4"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{trainer.name}</h5>
                    <p className="text-muted mb-1">{trainer.title}</p>
                    <p className="card-text">{trainer.description}</p>
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

export default Trainers
