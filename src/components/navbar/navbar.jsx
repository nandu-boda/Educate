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
                <li><link to = "hero" offset = {0} smooth = {true} duration={500}>Home</link></li>
                <li><link to = "program" offset = {0} smooth = {true} duration={500}>Program</link></li>
                <li><link to = "about" offset = {0} smooth = {true} duration={500}>About</link></li>
                <li><link to = "campus" offset = {0} smooth = {true} duration={500}>Campus</link></li>
                <li><link to = "testimonials" offset = {0} smooth = {true} duration={500}>Testimonials</link></li>
                <li>
                    <button className='btn'>Contact Us</button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
