import React from 'react';
import './program.css';

const Program = () => {
  return (
   
    <div className='programs'>
       
        <div className='program'>
            <img src='public\program-1.png' alt="Program 1" />
        <div className='caption'>
             <img src='public\0.png' alt="Program 1" />
             <p>Graduation degree</p>
        </div>
        </div>
       <div className='program'>
            <img src='public\program-2.png' alt="Program 2" />
             <div className='caption'>
             <img src='public\1.png' alt="Program 1" />
              <p>Masters degree</p>
        </div>
        </div>
      <div className='program'>
            <img src='public\program-3.png' alt="Program 3" />
             <div className='caption'>
             <img src='public\2.png' alt="Program 1" />
                <p> Post Graduation</p>

        </div>
        </div>
    </div>
  );
}

export default Program;
