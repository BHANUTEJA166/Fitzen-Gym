import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SendEnquiryF from '../enquiries/SendEnquiryF'
import { getClassById } from '../../services/fzService'

const ClassDetails = () => {
  const { id } = useParams()
  const [data, setData] = useState({})

  useEffect(() => {
    getClassById(id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }, [id])

  return (
    <div className='container p-5'>
      <div className='row'>
        <div className='col-md-6'>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <button className='btn btn-primary'>Duration: {data.duration}</button>
          <p className='my-2'>Note: This activity for {data.level}</p>
          <p className='my-3'>
            <span className='text-bg-success p-2'> Category: {data.alt}</span>
          </p>
          <img
            src={`/${data.image}`}
            alt={data.title}
            className="card-img-top"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover"
            }}
          />
        </div>
        <div className='col-md-6'>
          <h3>Book your Slot</h3>
          <SendEnquiryF />
        </div>
      </div>
    </div>
  )
}

export default ClassDetails
