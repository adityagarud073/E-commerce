import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast,faSackDollar,faCreditCard,faHeadphones } from '@fortawesome/free-solid-svg-icons'; 
import Collection from './Collection';

import Recommand from './Recommand';
import Owl from './Owl';



const Product = () => { 
  return (
    <>
      <div className="container border mt-5 border rounded">
        <div className="row ">
        <div className="col-12 col-md-3 col-lg-3 d-flex align-items-center">   
           <FontAwesomeIcon icon={faTruckFast} className="fs-1 me-3 m-5" />  
              <div >
              <h4>Free Shipping</h4>
              <p>On orders over $99.</p>
           </div>   
        </div>
        <div className="col-12 col-md-3 col-lg-3 d-flex align-items-center">   
           <FontAwesomeIcon icon={faSackDollar} className="fs-1 me-3 m-5" />  
              <div >
              <h4>
              Money Back</h4>
              <p>Money back in 15 days..</p>
           </div>   
        </div>
        <div className="col-12 col-md-3 col-lg-3 d-flex align-items-center">   
           <FontAwesomeIcon icon={faCreditCard} className="fs-1 me-3 m-5" />  
              <div >
              <h4>
              Secure Checkout</h4>
              <p>100% Payment Secure.</p>
           </div>   
        </div>
        <div className="col-12 col-md-3 col-lg-3 d-flex align-items-center">   
           <FontAwesomeIcon icon={faHeadphones} className="fs-1 me-3 m-5" />  
              <div >
              <h4>Online Support</h4>
              <p>Ensure the product quality.</p>
           </div>   
        </div>

        </div>
      </div>

    <Collection/>
    <Owl/>
    {/* <Collection2/> */}
    <Recommand/>
    
    {/* <Owlimp/> */}
   
    </>
  );
};

export default Product;
