import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const [allEntry, setAllEntry] = useState([])

  const submitForm = () => {
    const newEntry = { email: email, password: password }
  
    console.log("Email Address: "+ email)
    console.log("Password: "+ password)
  }
  return ( 
    <>
    <h1 id='login-head'>Welcome to <span>Shopix.io</span></h1>
    <form>
      <div>
        <input 
          type="email" 
          name="email" 
          id="email" 
          placeholder='Mail Address' 
          autoComplete='off' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input 
          type="password" 
          name="password" 
          id="password" 
          placeholder='Password' 
          autoComplete='off' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Link to='/home'><button id='login' onClick={submitForm}>Log In</button></Link> 
      <div id="forget">
        <a href="#">Forget Password</a>
      </div>
    </form>
    </>
  )
}
