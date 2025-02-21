import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "bootstrap/dist/css/bootstrap.min.css";
import grid__5 from '../assets/grid__5.png'
import grid__6 from '../assets/grid__6.png'
import grid__7 from '../assets/grid__7.png'
import grid__8 from '../assets/grid__8.png'
import grid__9 from '../assets/grid__9.png'
import './Recommand.css';

const Owl = () => {
  const options = {
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 3000,
    loop: true,
    responsive: {
      0: {
        items: 1, 
      },
      576: {
        items: 2, 
      },
      768: {
        items: 4,
      },
      1200: {
        items: 4,
      },
    },
  };


  return (
    <div className="container ">
     <div className="row mb-5 p-5">
      <div className="col-12">
          <div class="d-grid gap-2 d-md-flex justify-content-center mt-5">
          <button class="btn btn-outline-dark p-2 ps-5 pe-5 btn btn-secondary" type="button">New</button>
          <button class="btn btn-outline-dark p-2 ps-5 pe-5 btn btn-secondary" type="button">Sale</button>
        </div>
        </div>
        </div>
      <div className="row mt-4">
        <div className="col-12">
          {/* Owl Carousel */}
          <OwlCarousel className="owl-theme" {...options}>
          <div className="item">
            <div class="card border-0">
           <img src={grid__5}class="card-img-top " alt="grid"/>
           <div class="card-body text-center">
           <a href="#" class="text-decoration-none text-dark fs-6">F. Ultimate Smart Watch</a>
           <h5 class="card-title text-center mt-3"><span>$47.00</span></h5>
            </div>
          </div>
        </div>

        <div className="item">
            <div class="card border-0">
           <img src={grid__6}class="card-img-top " alt="grid"/>
           <div class="card-body text-center">
           <a href="#" class="text-decoration-none text-dark fs-6">S. Mokmol Jacket</a>
           <h5 class="card-title text-center mt-3"><del>$72.00</del><span className="ps-2 orange">$47.00</span> </h5>
            </div>
          </div>
        </div>

        <div className="item">
            <div class="card border-0">
           <img src={grid__7}class="card-img-top " alt="grid"/>
           <div class="card-body text-center">
           <a href="#" class="text-decoration-none text-dark fs-6">W. Men Formal T-shirt</a>
           <h5 class="card-title text-center mt-3"><span>$47.00</span></h5>
            </div>
          </div>
        </div>

        <div className="item">
            <div class="card border-0">
           <img src={grid__8}class="card-img-top " alt="grid"/>
           <div class="card-body text-center">
           <a href="#" class="text-decoration-none text-dark fs-6">W. Men Formal T-shirt</a>
           <h5 class="card-title text-center mt-3"><del>$72.00</del><span className="ps-2 orange">$47.00</span> </h5>
            </div>
          </div>
        </div>

        <div className="item">
            <div class="card border-0">
           <img src={grid__9}class="card-img-top " alt="grid"/>
           <div class="card-body text-center">
           <a href="#" class="text-decoration-none text-dark fs-6">W. Men Formal T-shirt</a>
           <h5 class="card-title text-center mt-3"><del>$72.00</del><span className="ps-2 orange">$47.00</span> </h5>
            </div>
          </div>
        </div>
           
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Owl;
