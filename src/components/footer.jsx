import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'; 
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialYoutube } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import logo from '../assets/logo.jpg';
import { CiSearch } from "react-icons/ci";

function Footer() {
    return (
        <footer className='foot py-5'>
            <div>
                <img src={logo} alt='logo'></img>
                <div><FaFacebook /></div>
                <div><FaXTwitter /></div>
                <div><FaInstagram /></div>
                <div><SlSocialYoutube /></div>
            </div>
            <div className="email-input">
                {/* Input and Button should be separate elements */}
                <input type='text' placeholder='Email address' />
                
            </div>
            <div className='contentcontainer'>
                <div className='row'>
                    <div className='col-md-3'>
                        {/* Add content here if necessary */}
                    </div>
                    <div className='col-md-3'>
                        <h5>Navigation</h5>
                        <ul className='list-unstyled'>
                            <li>Home</li>
                            <li>About</li>
                            <li>E-book</li>
                            <li>Contact</li>
                            <li>Blog</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>
                    <div className='col-md-3'>
                        <h5>Categories</h5>
                        <ul className='list-unstyled'>
                            <li>Forklift Parts</li>
                            <li>Forklift Services</li>
                            <li>Forklift Rentals</li>
                            <li>Equipment</li>
                        </ul>
                    </div>
                    <div className='col-md-3'>
                        <h5>Need help? / Contact us</h5>
                        <ul className='list-unstyled'>
                            <li><FaLocationDot /> 1120 Oakleigh Drive East Point, GA 30344</li>
                            <li><IoCallOutline /> 770-692-1455 (ph) 770-692-1450 (fax)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;