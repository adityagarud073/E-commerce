import React from 'react'
import main_herobanner__4 from '../assets/main_herobanner__4.png'
import main_herobanner__5 from '../assets/main_herobanner__5.png'



const Hero = () => {

  function clickme(){
   alert("Scroll below..")
  }


  return (
    <div>
      
        
 <div className="container-fluid">
 <div className="row">
 <div className="col-12">

     <div id="carouselExampleDark" class="carousel carousel-dark slide">

  <div class="carousel-inner">
    <div class="carousel-item active position-relative" >
      <img src={main_herobanner__4} class="d-block w-100" alt="main_herobanner__4"/>
      <div class="carousel-caption d-none d-md-flex h-75 w-25  flex-column text-start position-absolute start-50 top-25 pt-5">
      <h2 className="fst-italic fs-1 pb-3">
           Limited Offer
          <div><span>Up to 50%</span></div>
     </h2>

        <p className='pb-3'>Enchanting Styles for Dreamy Souls.</p>
        <button type="button" class="btn btn-warning "onClick={clickme}>Warning</button>
      </div>
    </div>
    <div class="carousel-item ">
      <img src={main_herobanner__5} class="d-block w-100" alt="main_herobanner__5"/>
      <div class="carousel-caption d-none d-md-flex h-75 w-25  flex-column text-start position-absolute start-50 top-25 pt-5">
      <h2 className="fst-italic fs-1 pb-3">
           Limited Offer
          <div><span>Up to 50%</span></div>
     </h2>

        <p className='pb-3'>Enchanting Styles for Dreamy Souls.</p>
        <button type="button" class="btn btn-warning" onClick={clickme}>Warning</button>
      </div>
    </div>
   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true" title='prev'></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true" title='next'></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>

        <div>
        
        </div>
        </div>
        </div>
    </div>
  )
}

export default Hero
