import React from 'react'

const HeroF = () => {
  return (
    <section>
        <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className='banner1'><h1>Strong mind. Strong body. Stronger you.</h1>
      <p>From yoga to strength training — transform with purpose at Fitzen.</p>
      </div>
    </div>
    <div className="carousel-item">
      <div className='banner2'>
        <h1>Reconnect with your body. Rediscover your breath.</h1>
      <p>Join our yoga and mindfulness sessions designed for your inner balance.</p>
      </div>
    </div>
    <div className="carousel-item">
      <div className='banner3'>
        <h1>Your journey to wellness begins here.</h1>
      <p>Experience peace, power, and progress — all under one roof.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
    </div>
    </section>
  )
}

export default HeroF