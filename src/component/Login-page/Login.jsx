import React from 'react'
import { Link } from 'react-router-dom'
import '../Login-page/Login.css'

function Login() {
  return (  
<form className='Login-form'>
<div className='Login'>
    <h2>Login</h2>
      <input className='login-input' type="text" name='Surname' placeholder='User name' /><br></br>
      <input className='login-input' type="text" name='Passward' placeholder='Passward' required/><br></br>
      <Link className='login-btn' to='/'><button type='Login' className='Login_btn' placeholder='Login'>Login</button></Link>
      <Link to='/'>Back</Link>
</div>
</form>

  )
}

export default Login