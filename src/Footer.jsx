import React from 'react'



const Footer = () => {
  return (
    <div className="container-fluid mt-5 bg-secondary-subtle ">
   <div className="container ">
    <div className="row">
      <div className="col-12 text-center mt-5">
        <h2>Newsletter</h2>
        <p>Learn about our most recent news, updates, and deals by subscribing.</p>
      </div>
      <div className="col-12">
      <div class="input-group mb-3 p-5 ">

 <input type="text" class="form-control" placeholder="email@example.com" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
 <button class="btn btn-warning p-3" type="button" id="button-addon1">Subscribe</button>
</div>
      </div>
    </div>

    <div className="row mt-5 d-flex justify-content-around ">
       <div className="col-12 col-md-4 col-lg-4 p-4">
      <h4 >About us</h4>
       <p className='pt-3 pb-4'>Minimal E-Commerce is a dynamic and innovative online retail platform that offers a wide range of products to customers worldwide.</p>

       
        <span >

        <a href="#"><i class="fa-brands fa-facebook ps-0 pe-2 pt-2 pb-2"></i></a>
        <a href="#"><i class="fa-brands fa-twitter p-2" ></i></a>
        <a href="#"><i class="fa-brands fa-instagram p-2"></i></a>
        <a href="#"><i class="fa-brands fa-youtube p-2" ></i></a>
        <a href="#"><i class="fa-brands fa-linkedin p-2"></i></a>
        <a href="#"><i class="fa-brands fa-pinterest p-2"></i></a>

        </span>
    
      </div>

      <div className="col-12 col-md-4 col-lg-4 p-4">
      <h3 class="text-bold ">Call Us</h3>
        <p>Have some queries? Or just want to say Hi. Feel free to contact us 24x7. We'll be happy to help. </p>
         
        <p>
        <h6><i class="fa-solid fa-location-dot"></i> Address:  <span class="opacity-75">Mumbai, India</span></h6>
        </p>

       <p>
       <h6><i class="fa-solid fa-phone"></i> Phone:  <span class="opacity-75">+(555) 176245221 </span></h6>
       </p>

       <p>
       <h6><i class="fa-regular fa-envelope"></i> Email: <span class="opacity-75"> personal@website.com</span></h6>
       </p>

      
    </div>
    <div className="col-12 col-md-4 col-lg-4 p-4">
    <h5 class="fw-bold fs-4 mb-3 ">Get in Touch

        </h5>
        <p>
          <h6><i class="fa-solid fa-location-dot"></i> Address: <span class="opacity-75">Mumbai, India</span></h6>   
        </p>
        <p>
          
        <h6><i class="fa-solid fa-phone"></i> Phone: <span class="opacity-75">+887 358 123</span></h6>

        </p>
        <p>
         
        <h6><i class="fa-solid fa-fax"></i>  fax: <span class="opacity-75">+997 318 323</span></h6>

        </p>
        <p>
          
        <h6> <i class="fa-regular fa-envelope"></i>  Email:  <span class="opacity-75">personal@website.com</span></h6>
        </p>
        <p>
          
        <h6> <i class="fa-solid fa-globe"></i> Website: <span class="opacity-75"><a href="#">www.personal.com</a></span></h6>
        </p>
  

    </div>
    </div>
    </div>
   </div>
  )
}

export default Footer
