import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import './Footer.css';
import footer_logo from '../../assets/MyLogo.png';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
    const handleSubscribe = () => {
        const email = document.querySelector('.footer-email-input input').value;
        // Here you can add your logic for subscribing the user with the provided email
        console.log(`Subscribing user with email: ${email}`);
        // Clear the input field after subscribing (optional)
        document.querySelector('.footer-email-input input').value = '';
    };

    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" />
                    <p>I am a Fullstack Developer from, Kenya with 3 years of experience in companies like AAA Platforms Limited, and Kenya Ports Authority.</p>
                </div>
                {/* <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter your email'/>
                    </div>
                    <div type='text' name='email' className="footer-subscribe" onClick={handleSubscribe}>
                        Subscribe
                    </div>
                </div> */}
            </div>
            <div className="footer-icons">
                <a href="https://x.com/Ricu235419" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter size={24} />
                </a>
                <a href="https://github.com/Erick-dev98" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/erick-mutua-47000929a" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={24} />
                </a>
            </div>
            <hr />
            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    <p>&copy; {new Date().getFullYear()} All rights reserved. <br/> Made by Erick Mutua.</p>
                </div>
                {/* <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div> */}
            </div>
        </div>
    );
};

export default Footer;
