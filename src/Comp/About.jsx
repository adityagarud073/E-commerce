import React from 'react'
import About__1 from '../assets/About__1.jpg'

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="row m-5">
          <div className="col-12 text-center"><h2>About us</h2>
          </div>         
        </div>

        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
              <div className="row">
                <div className="col-12 bold pb-2">
                  <h3>Minimal <span className=''>in</span> E-Commerce</h3>
                </div>
              </div>

              <p className='pb-2 lh-lg'>
              Minimalin E-Commerce is a dynamic and innovative online retail platform that offers a wide range of products to customers worldwide. Established in 1191, our company has rapidly grown to become a prominent player in the eCommerce industry. Our mission is to provide customers with a seamless and convenient shopping experience while offering a diverse selection of high-quality products.
              </p>
              <p className=' lh-lg' >
              Minimalin E-Commerce is dedicated to setting new standards in the eCommerce landscape, providing convenience, choice, and quality to our valued customers.
              </p>

          </div>
          <div className="col-12 col-lg-6">
          <div class="card">
            <img src={About__1} class="card-img-top" alt="About"/>
  
          </div>
            
            

            </div>
        </div>
      </div>
    </div>
  )
}

export default About
