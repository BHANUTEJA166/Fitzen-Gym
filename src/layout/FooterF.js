// import React from 'react'

// const FooterF = () => {
//   return (
//     <footer className='container-fluid p-5 text-bg-dark text-center'>
//     <p>&copy; Designed&Developed by Bhanu Teja</p>
//     </footer>
//   )
// }

// export default FooterF

import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'

const FooterF = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row text-center text-md-start">

          <div className="col-md-4 mb-4">
            <h4 className="footer-logo">Fitzen</h4>
            <p>
              Strong body. Calm mind. Better life.
              Your fitness journey starts here.
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/classes">Classes</Link></li>
              <li><Link to="/schedules">Schedules</Link></li>
              <li><Link to="/trainers">Trainers</Link></li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h5>Contact</h5>
            <p>Email: support@fitzen.com</p>
            <p>Phone: +91 9876543210</p>

            <div className="social-icons">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-twitter-x"></i>
            </div>
          </div>

        </div>

        <hr />

        <div className="text-center">
          <p className="mb-0">
            &copy; 2026 Designed & Developed by Bhanu Teja
          </p>
        </div>
      </div>
    </footer>
  )
}

export default FooterF
