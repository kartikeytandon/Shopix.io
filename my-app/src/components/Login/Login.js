import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [allEntry, setAllEntry] = useState([])

  const submitForm = () => {
    // e.preventDefault();

    const newEntry = { email: email, password: password }
  }
  return ( 
    <>
    <h1 id='login-head'>Welcome to <span>Shopix.io</span></h1>
    <form action={submitForm}>
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
      <Link to='/home'><button id='login'>Log In</button></Link> 
      <div id="forget">
        <a href="#">Forget Password</a>
      </div>
    </form>
    </>
  )
}
