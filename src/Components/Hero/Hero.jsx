import React from 'react';
import './Hero.css';
import profile_img from '../../assets/portfolio_profile.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume_pdf from '../../assets/erick_mutua_resume.pdf'; // Replace with your actual resume file path

const Hero = () => {
    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = resume_pdf; // Specify the path to your resume PDF file
        link.download = 'Erick_Mutua_Resume.pdf'; // Specify the file name for download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I'm Erick Mutua,</span> fullstack developer based in Kenya.</h1>
            <p>Welcome to my portfolio, where you can explore my latest projects, learn about my journey, and discover how I can help bring your ideas to life.</p>
            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>
                        Connect with me
                    </AnchorLink>
                </div>
                <div className="hero-resume" onClick={downloadResume} style={{ cursor: 'pointer' }}>
                    My resume
                </div>
            </div>
        </div>
    );
};

export default Hero;
