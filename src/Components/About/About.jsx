import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/profile_img.svg';

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a Software Developer with hands on skills on Java, C++, Dart, Javascript. Throughout my learnings, I have made several projects which shows my passion to make robust apps.</p>
                    <p>My passion for Software Development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>Flutter & Dart</p>
                        <hr style={{width: "50%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Java</p>
                        <hr style={{width: "70%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>React.js</p>
                        <hr style={{width: "40%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>MySQL</p>
                        <hr style={{width: "60%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Spring Boot</p>
                        <hr style={{width: "30%"}}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2+</h1>
                <p>YEARS OF EXPERIENCE IN BUILDING APPS</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>5+</h1>
                <p>PROGRAMMING LANGUAGES</p>
            </div>
        </div>
    </div>
  )
}

export default About