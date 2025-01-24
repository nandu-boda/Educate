import React from 'react';
import './campus.css';

const campus = () => {
  return (
    <div className='campus'>
      <div className ='gallery'>
            <img src='public/camp1.jpg' alt="" />
            <img src='public/camp2.jpg' alt="" />
            <img src='public/camp3.jpg' alt="" />
            <img src='public/camp4.jpg' alt="" className='four'/>
      </div>
      <button className='btn dark-btn'>See More Here
        <img src='public/white.png' alt="" />
        </button>
    </div>
  )
}

export default campus;
