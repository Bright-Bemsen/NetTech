
import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';

function Navbar() {
  return (
    <>
    <div className='items-List'>
    <nav className='Navbar'>
    <img src="/asset/my logo.png" alt="" className='logo' />
      <ul className='links'>
        <li><Link style={{color:'#f1356d'}}to='/'>Home</Link></li>
        <li><Link style={{color:'#f1356d'}}to='/about'>About</Link></li>
        <li><Link style={{color:'#f1356d'}}to='/team'>Team</Link></li>
        <li><Link style={{color:'#f1356d'}}to='/contact'>Contact</Link></li>
      </ul>
    <input type="text" name='text' placeholder='Search Here' className='inputbt'/>
    </nav>
      </div>
   
    </>
  );
}

export default Navbar