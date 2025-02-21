import React from 'react';
import './Recommand.css';
import grid__1 from '../assets/grid__1.png';
import grid__2 from '../assets/grid__2.png';
import grid__3 from '../assets/grid__3.png';
import grid__4 from '../assets/grid__4.png';
import grid__5 from '../assets/grid__5.png';
import grid__6 from '../assets/grid__6.png';
import grid__7 from '../assets/grid__7.png';
import grid__8 from '../assets/grid__8.png';
import grid__9 from '../assets/grid__9.png';
import Recommand2 from './Recommand2';

const Recommand = () => {
  const items = [
    { img: grid__1, dec: 'F. Ultimate Smart Watch' },
    { img: grid__2, dec: 'Tb. Dark Lipstick' },
    { img: grid__3, dec: 'Zc. Silver Small Earring' },
    { img: grid__4, dec: 'H. Women High Heel' },
    { img: grid__5, dec: 'P. Women Hand Purse' },
    { img: grid__6, dec: 'F. Ultimate Smart Watch' },
    { img: grid__7, dec: 'G. Baby Tops' },
    { img: grid__8, dec: 'F. Ultimate Smart Watch' },
    { img: grid__9, dec: 'F. Ultimate Smart Watch' },
  ];
  function Click(){
    alert("No More...Sorry..!")
  }

  return (
    <div className="container">
      <div className="row m-5">
        <div className="col-12 text-center">
          <h2>Recommended For You</h2>
        </div>
      </div>

      <div className="row">
        {items.map((item, index) => (
          <div className="col-12 col-md-6 col-lg-4 p-3" key={index}>
            <Recommand2 img={item.img} dec={item.dec} />
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-12 text-center mt-5">
          <button className='btn btn-outline-warning ps-5 pe-5' onClick={Click}>View All</button>
        </div>
      </div>
    </div>
  );
};

export default Recommand;
