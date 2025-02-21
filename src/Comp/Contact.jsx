import React from 'react'
import Form from '../Comp/Form'

const Contact = () => {
  return (
    <div>
      <div className="container-fluid  p-1">
        <div className="container mt-5 ">
            <div className="row">
              <div className="col-12 text-center ">
                <h2>Contact Us</h2>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-12 col-md-4 col-lg-4">
              <div class="card border rounded">
  
              <div class="card-body text-center">
                <h5 class="card-title pb-3">Email Address</h5>
                <p class="card-text">example@example.com</p>
                <p class="card-text">example2@example.com</p>              
              </div>
            </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4">
              <div class="card border rounded">
  
              <div class="card-body text-center">
                <h5 class="card-title pb-3">Phone Number</h5>
                <p class="card-text">+0123-456789</p>
                <p class="card-text">+9879-654321</p>              
              </div>
            </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4">
              <div class="card border rounded">
  
              <div class="card-body text-center">
                <h5 class="card-title pb-3">Office Address</h5>
                <p class="card-text">Your Street Address, City Name, State,</p>
                <p class="card-text">ZIP Code, Country.</p>              
              </div>
            </div>
              </div>
            </div>
        </div>
    </div>
    <Form/>
    </div>
  )
}

export default Contact
