import React from 'react'
import banner4 from "../assets/images/banner4.jpg"

const AboutF = () => {
  return (
    <section class="py-5 bg-light" id="about">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-6 mb-4 mb-md-0">
        <img src={banner4} alt="About Fitzen Studio" class="img-fluid rounded shadow"/>
      </div>
      
      <div class="col-md-6">
        <h2 class="mb-3">About Fitzen</h2>
        <p class="lead text-muted">
          At Fitzen Yoga & Fitness Studio, we believe that true transformation begins from within. Our expert trainers combine the ancient wisdom of yoga with modern fitness techniques to help you build strength, flexibility, and inner peace.
        </p>
        <p class="text-muted">
          Whether you're a beginner or a seasoned practitioner, our personalized approach ensures you’ll feel welcome, supported, and inspired in every session. Join us and experience the balance your mind and body deserve.
        </p>
        <a href="#programs" class="btn btn-primary mt-3">Explore Our Programs</a>
      </div>

    </div>
  </div>
</section>

  )
}

export default AboutF
