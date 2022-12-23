import React from "react";
import './About.css';
import { Link, Navigate } from 'react-router-dom';

function About() {
return (
<div className="about">
    <div className="about-content">
        <p className="about-para1"><h3>About Net Tech</h3>Net Tech is an antidot to ICT challemgies the massies are facing now. 
            Therefore, with our team of ICT expartice, we gather all the 
            requrements and solution it takes for us to stand out and Challange your challengies.<br></br>
            We Are Number One Best Set Of IT Gurrus You most Depend On.
            “If future generations are to remember us more with gratitude than sorrow, 
            we must achieve more than just the miracles of technology.
            We must also leave them a glimpse of the world as it was created, 
            not just as it looked when we got through with it.”
        </p>
    
    </div>
    <div className="img">
     <img src="/asset/my logo.png" alt="" className='about-pix' width='5%'/>
    </div>
    <p className="about-para2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Non nemo repellat consectetur sunt velit qui error voluptas provident veniam, excepturi 
        voluptatibus accusantium illo atque. Harum voluptatibus tempora quae officia corrupti. 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati labore 
        mollitia enim autem, est sapiente, necessitatibus natus incidunt voluptas, 
        ea itaque. Doloribus placeat sapiente doloremque, sequi magni culpa blanditiis omnis!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Quae voluptatum reprehenderit distinctio recusandae error maxime nihil doloribus, 
        tempora, architecto quod at cumque qui voluptates laudantium 
        soluta omnis eos deserunt a? Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Numquam amet officia, est provident ipsam minus quis itaque aspernatur delectus 
        consectetur suscipit ex quas reprehenderit. Voluptate obcaecati quae 
        quidem rerum rem? Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Nesciunt at, illum incidunt qui iure recusandae aperiam 
        minima ullam! Delectus a cumque ratione corrupti aliquam non quae ea nulla, 
        ad repellendus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Qui non quidem, modi pariatur consectetur saepe? Qui 
        assumenda error accusantium modi enim et est, nobis tempora labore, 
        dolorem quia, vitae quasi.
        <br/>
        <br/>
        <span className="aboutSpan">You can click GET STARTED TO HAVE AN ACCOUNT WITH US OR FOR MORE to see MORE !!</span>
        <div className="div">
        <p> <Link style={{color:'#fff'}} className='about-getBnt' to='/getStarted'>Get Started ?</Link></p>
        <p> <Link style={{color:'#fff'}} className='about-forMore' to='/forMore'>For More ?</Link> </p>
        </div>
        </p>
        <div className="img">
     <img src="/asset/tech-1.png" alt="" className='about-pix' />
    </div>
</div>             
 );
}
 
export default About