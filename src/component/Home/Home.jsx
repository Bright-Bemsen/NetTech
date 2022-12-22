import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css';


function Home() {

  return (
<div className='Parent'>
    <h6 className='heroText'>
    <span className='nettech'>NetTech</span> 
      <br/>
        <div className="ict_div"> The ICT Solution Center You Most Relay On </div>
        <br/>
        <span className='home-span2'>We Are Glad You Are Home</span> 
      </h6>
      <img src="/asset/tech-1.png" alt="" className='home-pix' />
    <Link to='/getStarted' className='getBnt'>Get Started</Link>
</div>
);
}
export default Home