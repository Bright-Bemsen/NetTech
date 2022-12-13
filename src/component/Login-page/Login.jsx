import {React, useContext} from 'react'
import { Link } from 'react-router-dom'
import { nameContext } from '../../context'
import '../Login-page/Login.css'

function Login() {

  //getting the context
  const {name} = useContext(nameContext)
  return (  
<form className= 'Login-form'>
<div className='Login'>
    <h2>Welcome {name}! Continue to Login</h2>
      <input className='login-input' type="text" name='Surname' placeholder='User name' /><br></br>
      <input className='login-input' type="text" name='Passward' placeholder='Passward' required/><br></br>
      <Link className='login-btn' to='/'><button type='Login' className='Login_btn' placeholder='Login'>Login</button></Link>
      <Link to='/'>Back</Link>
</div>
</form>

  )
}

export default Login