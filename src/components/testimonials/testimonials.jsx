import React, { useRef } from 'react';
import './testimonials.css';

const Testimonials = () => {
  const slider = useRef(null);
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) { 
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`; 
  };

  const backForward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`; 
  };

  return (
    <div className='testimonials'>
      <img src='/public/back.png' alt='Back' className='backbtn' onClick={backForward} />
      <img src='/public/right.png' alt='Right' className='rightbtn' onClick={slideForward} />
      <div className='slider'>
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className='user-info'>
                <img src='/public/t4.jpg' alt='User' />
                <div>
                  <h3>Alice Johnson</h3>
                  <span>Educate, USA</span>
                </div>
              </div>
              <p>"The university's arts and design programs have unleashed my creativity and helped me develop a unique artistic style. The inspiring environment and expert guidance have been instrumental in my growth as an artist."</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className='user-info'>
                <img src='/public/t3.jpg' alt='User' />
                <div>
                  <h3>John Doe</h3>
                  <span>Educate, USA</span>
                </div>
              </div>
              <p>The university's comprehensive education programs have truly transformed my life. The hands-on learning and personalized mentorship have prepared me to make a meaningful impact in the field of education.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className='user-info'>
                <img src='/public/t2.jpg' alt='User' />
                <div>
                  <h3>Maria Garcia</h3>
                  <span>Educate, USA</span>
                </div>
              </div>
              <p>"The university's arts and design programs have unleashed my creativity and helped me develop a unique artistic style. The inspiring environment and expert guidance have been instrumental in my growth as an artist."</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className='user-info'>
                <img src='/public/t4.jpg' alt='User' />
                <div>
                  <h3>Liam O'Connor</h3>
                  <span>Educate, USA</span>
                </div>
              </div>
              <p>"The university's business programs have given me the tools and confidence to succeed in the corporate world. The comprehensive curriculum and networking opportunities have been key to my professional development."</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
