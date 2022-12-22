import {React, useState, useContext} from 'react'
import '../GetStarted-button/GetStarted.css'
import { Link, Navigate } from 'react-router-dom';
import { nameContext } from '../../context';

function GetStarted() {
  const [redirect, setredirect] = useState(false)
  const [surname, setsurname] = useState(false)
  
  // destructuring name from the context
  const  { setname } = useContext(nameContext)

  const handleChange = (e) =>{
    e.preventDefault()
    setsurname(e.target.value)
  }
  const login = (e) => {
    setredirect(true)
    //i set the context value to my input value
    setname(surname)
   e.preventDefault()
  }
  return (
  <form className="form_element" onSubmit={login}>
    <div className='signup-form'>
     <h2>Sign Up <h6>Net Tech</h6></h2>
     <div className='loginForm'>
        <input value={surname} onChange={handleChange} className='input-element' type="text" name='Surname' placeholder='Full name' required /><br></br>
        <input className='input-element'type="text" name='User Name' placeholder='User Name' required/><br></br>
        <input className='input-element'type="text" name='Passward' placeholder='Passward' required/><br></br>
        <input className='input-element'type="text" name='PhoneNo' placeholder='Phone No' required/><br></br>
        <input className='input-element'type="text" name='Email Address' placeholder='Email Address' required/><br></br>
        <button className='input-element'type='SignUp'className='SignUp_btn' placeholder='Sign Up'>Sign Up</button>
        {redirect && <Navigate to={'/Login'} />}
        <Link to='/'>Back</Link>
        </div>
    </div>
    </form>
  )
}

export default GetStarted