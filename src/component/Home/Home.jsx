import React from 'react'
import {Link} from 'react-router-dom'
import Product from '../Product-page/Product';
import './Home.css';


function Home() {

  return (
<div className='Parent'>
{/* <img src="/asset/images (1).jpg" alt="" className='background-pix'/> */}
    <h4 className='heroText'>
    <span className='nettech'>NET TECH</span> 
      <br></br>
        The ICT Solution Center You Most Relay On <br></br>
        <Link to='/getStarted' className='getBnt'>Get Started</Link>
      </h4>
     <Product
     Name="Work Station"
     Description="i7"
     Price={150000}/>

     <Product
     Name="Pistol Gun"
     Description="100 Rounds New"
     Price={9000000}/>
     
</div>
);
}

export default Home