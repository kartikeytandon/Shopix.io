import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {Dialog, DialogActions, DialogContent, DialogTitle, Button, DialogContentText, TextField} from '@mui/material'

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const [allEntry, setAllEntry] = useState([])

  const submitForm = () => {
    const newEntry = { email: email, password: password }
  
    console.log("Email Address: "+ email)
    console.log("Password: "+ password)
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


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
      <a onClick={handleClickOpen} style={{cursor: 'pointer'}}>
        Forgot Password? 
      </a>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Reset Password</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Set a new password:
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Confirm</Button>
          </DialogActions>
        </Dialog>
      </div>
    </form>
    </>
  )
}
