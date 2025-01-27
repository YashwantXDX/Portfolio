import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Yashwant Choure,</span> Software Developer in India</h1>
        <p>I am a Software Developer with hands-on skills in Flutter, Dart, Java, MySQL, Firebase. I also do DSA regularly to sharpen my logic building and complex code understanding.</p>
        <div className="hero-action">
            <div className="hero-connect">
              <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
              </div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero