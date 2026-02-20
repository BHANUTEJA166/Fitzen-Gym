import React from 'react'
import { Link } from 'react-router-dom'

const HeaderF = () => {
  return (
    <header className='container-fluid p-0'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <Link className="navbar-brand" to="/">
      <strong>Fit<span className='text-danger'>zen</span></strong>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/classes">Classes</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/trainers">Trainers</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/schedules">Schedules</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/admin">Admin</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </header>
  )
}

export default HeaderF