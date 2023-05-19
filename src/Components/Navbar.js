import React, { useState } from 'react'
import random from '../Assets/profile-user.png'
import man from '../Assets/man.png'
import {Link, useNavigate} from 'react-router-dom'
import computer from '../Assets/output-onlinegiftools.gif'
import './Navbar.css'
const Navbar = ({user,setUser}) => {
  const [current,setCurrent] = useState(true)
  const navigate = useNavigate()
  console.log(current)
  const handleLogout = ()=>{
    setUser(null)
    sessionStorage.removeItem('user')
  }

  const handleHome=()=>{
    setCurrent(true)
    navigate("/")
  }
  const handleBlogs=()=>{
    setCurrent(true)
    navigate("/")
  }
  
  const handleBack=()=>{
    setCurrent(true)
    navigate("/")
  }
  const handleQuiz=()=>{
    setCurrent(false)
    navigate("quizHomePage")
  }

  
  return (
    <>
      <div className='navbar'>
        <div 
          style={{display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}
          onClick={handleHome}
        >
          <h1>Quizzy</h1>
          <img src={computer}
            style ={{width:"100px",height:"100px"}}    
            alt="gif"/>
        </div>
        {/* <h3 onClick={handleContribute}>Contribute</h3> */}
        <h3 onClick={handleQuiz}>Quiz</h3>
        <h3 onClick={handleBlogs}>Blogs</h3>
        <div className='navbar-user-profile'>
          {
            user ?
            <Link to={`/user/${user.name}`}><img src={man} alt="User-Profile" className='user-profile'/></Link>
            :
            <img src={random} alt="User-Profile" className='user-profile'/>
          }{
            !user?
            <p><Link to="/signup" style={{textDecoration:"none",color:"black"}}>Create Account</Link>/<><Link to="/login">Login</Link></></p>
            :
            <div className='logout-btn'>
              <p>{user.name}/</p>
              <p onClick={handleLogout}><Link to="/" style={{textDecoration:"none",color:"black"}}>Logout</Link></p>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default Navbar
