import React from "react";
import './About.css';
import { Link, Navigate } from 'react-router-dom';

function About() {
return (
<div className="about">
<div className="about-content">
<h3>About Net Tech</h3>
<p className="about-para">Net Tech is an antidot to ICT challemgies the massies are facing now. 
Therefore, with our team of ICT expartice, we gather all the 
requrements and solution it takes for us to stand out and Challange your challengies.<br></br>
We Are Number One Best Set Of IT Gurrus You most Depend On.
“If future generations are to remember us more with gratitude than sorrow, 
we must achieve more than just the miracles of technology.
We must also leave them a glimpse of the world as it was created, 
not just as it looked when we got through with it.”
</p>
<Link className="-getstarted-btn" to='/getStarted' className='getBnt'>Get Started</Link>
</div>
{/* <form className="form_element" onSubmit={login}>
    <div className='signup-form'>
     <h2>Sign Up</h2>
        <input className='input-element' type="text" name='Surname' placeholder='Full name' /><br></br>
        <input className='input-element'type="text" name='User Name' placeholder='User Name' required/><br></br>
        <input className='input-element'type="text" name='Passward' placeholder='Passward' required/><br></br>
        <input className='input-element'type="text" name='PhoneNo' placeholder='Phone No' required/><br></br>
        <input className='input-element'type="text" name='Email Address' placeholder='Email Address' required/><br></br>
        <button className='input-element'type='SignUp' className='SignUp_btn' placeholder='Sign Up'>Sign Up</button>
        {redirect && <Navigate to={'/Login'} />}
        <Link to='/'>Back</Link>
    </div>
    </form> */}
</div>             
 );
}
 
export default About