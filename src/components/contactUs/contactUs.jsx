import React from 'react';
import './contactUs.css';
import Msg from '/public/msg.png'

const ContactUs = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "308011c6-1444-4776-820a-a5defd18d8c1");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
    return(
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={Msg} alt="" /></h3>
                <p>Feel free to reach out through contact form or find our contact information below. 
                    Your feedback,
                     questions,
                      and suggestions are important to us as we strive to provide exceptional service to our university community.
                      </p>
                <ul>
                    <li><img src="/public/mail.png" alt="" />Contact@GreatStack.dev</li>
                    <li><img src="/public/call.png" alt="" />+1 123-456-7890</li>
                    <li><img src="/public/loc.png" alt="" />77 Massachusetts Ave, Cambridge <br/> MA 02139, United States
                    </li>
                </ul>
            </div>
             <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Name<span>*</span></label>
                <input type="text" name="name" placeholder='Enter your Name'
                required/>
                <label>Phone No<span>*</span></label>
                <input type="tel" name='phone' placeholder='Enter Your Number'
                required />
                <label >Email<span>*</span></label>
                <input type="text" name='Email' placeholder='Enter your Email'/>
                <label >Message <span>*</span></label>
                <textarea name='message' rows="6" placeholder='Enter your message Here'></textarea>
                <button type='onsubmit' className='btn dark-btn'>Submit</button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}
export default ContactUs;