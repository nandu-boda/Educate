import React, { useEffect, useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
import Menu_icon from '../../../public/more.png';

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
    const [mobileMenu,setMobileMenu] = useState(false);
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);

    }
    return (
        <nav className={`container ${sticky ? 'sticky' : ''}`}>
            <h1>Educate</h1>
          
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li><Link to='hero' smooth = {true} offset={-260} duration={500}>Home</Link></li>
                <li><Link to='program' smooth = {true} offset={-260} duration={500}>Program</Link></li>
                <li><Link to='about' smooth = {true} offset={-150} duration={500}>About</Link></li>
                <li><Link to='campus'smooth = {true} offset={-260} duration={500}>Campus</Link></li>
                <li><Link to='testimonials' smooth = {true} offset={-260} duration={500} >Testimonials</Link></li>
                <li>
                    <Link to='contact' smooth = {true} offset={0} duration= {500} className='btn'>Contact Us</Link>
                </li>
               
          
                
            </ul>
            <img src={Menu_icon} alt="" className='menu_icon'onClick={toggleMenu}/>
        </nav>
    );
};

export default Navbar;
