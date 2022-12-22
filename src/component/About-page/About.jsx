import React from "react";
import './About.css';
import { Link, Navigate } from 'react-router-dom';

function About() {
return (
<div className="about">
    <div className="about-content">
        
                <p className="about-para"><h3>About Net Tech</h3>Net Tech is an antidot to ICT challemgies the massies are facing now. 
                Therefore, with our team of ICT expartice, we gather all the 
                requrements and solution it takes for us to stand out and Challange your challengies.<br></br>
                We Are Number One Best Set Of IT Gurrus You most Depend On.
                “If future generations are to remember us more with gratitude than sorrow, 
                we must achieve more than just the miracles of technology.
                We must also leave them a glimpse of the world as it was created, 
                not just as it looked when we got through with it.”
                <Link className='getBnt' to='/getStarted'>Get Started</Link>
                <Link className='about-forMore' to='/getStarted'>For More</Link>
                </p>
                <img src="/asset/images (1).jpg" alt="" className='about-pix'/>
    </div>
</div>             
 );
}
 
export default About