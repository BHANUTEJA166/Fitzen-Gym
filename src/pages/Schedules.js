import React, { useEffect, useState } from 'react'
import { getSchedules } from '../services/fzService'

const Schedules = () => {

  const [data, setData] = useState(null)
  const [error, setError] = useState("")

  useEffect(() => {
    getSchedules()
      .then((res) => setData(res.data))
      .catch((err) => {
        setError(err.message)
      })
  }, [])

  if (error) {
    return <p>{error}</p>
  }

  if (!data) {
    return <p>Loading...</p>
  }

  return (
    <section className="py-5 bg-light" id="schedule">
      <div className="container">
        <h2 className="text-center mb-4">Weekly Class Schedule</h2>

        <div className="text-center mb-4">
          <button className="btn btn-outline-primary me-2">All</button>
          <button className="btn btn-outline-secondary me-2">Yoga</button>
          <button className="btn btn-outline-success me-2">HIIT</button>
          <button className="btn btn-outline-danger me-2">Meditation</button>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered table-hover text-center bg-white">
            <thead className="table-dark">
              <tr>
                <th>Class Name</th>
                <th>Timings</th>
                <th>Day</th>
                <th>Trainer</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((schedule, index) => {
                return (
                  <tr key={index}>
                    <td>{schedule.class}</td>
                    <td>{schedule.time}</td>
                    <td>{schedule.day}</td>
                    <td>{schedule.trainer}</td>
                    <td>{schedule.status}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Schedules
