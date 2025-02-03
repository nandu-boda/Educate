import React, { useEffect, useState } from 'react';
import './navbar.css';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`container ${sticky ? 'sticky' : ''}`}>
            <h1>Educate</h1>
          
            <ul>
                <li><link to = "Home" offset = {0} smooth = {true} duration={500}/>Home</li>
                <li><link to = "Home" offset = {0} smooth = {true} duration={500}/>Program</li>
                <li><link to = "Home" offset = {0} smooth = {true} duration={500}/>About</li>
                <li><link to = "Home" offset = {0} smooth = {true} duration={500}/>Campus</li>
                <li><link to = "Home" offset = {0} smooth = {true} duration={500}/>Testimonials</li>
                <li>
                    <button className='btn'>Contact Us</button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
