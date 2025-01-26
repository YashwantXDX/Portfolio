import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.svg';

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Yashwant Choure,</span> Software Developer in India</h1>
        <p>I am a Software Developer with hands-on skills in Flutter, Dart, Java, MySQL, Firebase. I also do DSA regularly to sharpen my logic building and complex code understanding.</p>
        <div className="hero-action">
            <dib className="hero-connect">Connect with me</dib>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero