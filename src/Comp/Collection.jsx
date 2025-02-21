import React from 'react'
import collection__1 from '../assets/collection__1.png'
import collection__2 from '../assets/collection__2.png'
import collection__3 from '../assets/collection__3.png'

const Collection = () => {
  return (
    <div>
      <div className="container mt-5">

        <div className="row ">
          <div className="col-12 col-md-4 col-lg-4">
          <div class="card border-0">
          <img src={collection__1} class="card-img-top" alt="1"/>
          <div class="card-body">
            <h5 class="card-title text-center">Smartwatch</h5>
            <p class="card-text text-center">
            (5 items)</p> 
          </div>
          </div>
        </div>
        <div className="col-12 col-md-4 col-lg-4">
          <div class="card border-0">
          <img src={collection__2} class="card-img-top" alt="1"/>
          <div class="card-body">
            <h5 class="card-title text-center">Footwear</h5>
            <p class="card-text text-center">
            (5 items)</p> 
          </div>
          </div>
        </div>
        <div className="col-12 col-md-4 col-lg-4">
          <div class="card border-0">
          <img src={collection__3} class="card-img-top" alt="1"/>
          <div class="card-body">
            <h5 class="card-title text-center">Cap</h5>
            <p class="card-text text-center">
            (5 items)</p> 
          </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Collection
