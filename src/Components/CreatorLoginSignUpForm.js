import React from 'react'
import { useState } from 'react'
import './CreatorLoginSignUpForm.css'
const CreatorLoginSignUpForm = ({setCreatorID,creatorID}) => {

  const [toggle,setToggle] = useState(false)
  const [userID,setUserID] = useState("")
  const [password,setPassword] = useState("")
  const [email,setEmail] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  // const [email,setEmail] = useState("")
  const handleLogin = ()=>{
    console.log("login")
    const users =  JSON.parse(localStorage.getItem("creatorUser"))
    users.forEach(user => {
      console.log("user",user)
      console.log(email)
      console.log(user.email)
      if(user.email===userID){
        console.log("setuser")
        setCreatorID(user)
        return
      }
    });
  }
  const handleSignup = ()=>{
    console.log("Signup")
    const cretorUser = {
      email,
      creatorID:userID,
      password,
    }
    let users = []
    users =  JSON.parse(localStorage.getItem("creatorUser"))
    users = users? [...users,cretorUser]:[cretorUser]
    localStorage.setItem("creatorUser",JSON.stringify(users))
    setCreatorID(userID)
  }

  return (
    <>
    {
      toggle
      ?
      <div className='creator-login-page'>
      <div className='creator-login-form'>
        <h3>Login</h3>
        <p>CreatorID/email</p>
        <input type="text" placeholder='creatorID/email' value={userID} onChange={e=>setUserID(e.target.value)}/>
        <p>Password</p>
        <input type="password" placeholder='password' value={password} onChange={e=>setPassword(e.target.value)}/>
        <button className='creator-login-up-btn' onClick={handleLogin}>Login</button><br/>
        <div className='already-account'><p>New Creator</p><p onClick={()=>setToggle(!toggle)}>SignUp</p></div>
      </div>
      </div>
      :
      <div className='creator-login-page'>
      <div className='creator-signup-form'>
        <h3>Sign up</h3>
        <p>Email</p>
        <input type="email" placeholder='abc@gmail.com' value={email} onChange={e=>setEmail(e.target.value)}/>
        <p>CreatorID</p>
        <input type="text" placeholder='creatorID' value={userID} onChange={e=>setUserID(e.target.value)}/>
        <p>Password</p>
        <input type="password" placeholder='password' value={password} onChange={e=>setPassword(e.target.value)}/>
        <p>Confirm Password</p>
        <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)}/>
        <button className='creator-sign-up-btn' onClick={handleSignup}>Sign up</button><br/>
        <div className='already-account'><p>Already have account</p><p onClick={()=>setToggle(!toggle)}>Login</p></div>
      </div>
      </div>
    }
    </>
  )
}

export default CreatorLoginSignUpForm
