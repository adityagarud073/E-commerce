import React from 'react'
import './Recommand.css'


const Recommand2 = (props) => {
  return (
    <div>
       <div class="border rounded d-flex p-3">
             <div class="img ">
                    <img src={props.img} class="img"alt="" />
             </div>
             <div>
                <h5 className='pt-3'>{props.dec}</h5>
                <p>$ 9,0.00  <span className='orange '><b>$ 6,6.00</b></span></p>
            </div> 
       </div>

       
    </div>
  )
}

export default Recommand2
