
import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';

function Navbar() {
  return (
    <>
    <div className='items-List'>
    <nav className='Navbar'>
      <h2>NetTech</h2>
      <ul className='links'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/team'>Team</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    <input type="text" name='text' placeholder='Search Here' className='inputbt'/>
    </nav>
      </div>
   
    </>
  );
}

export default Navbar