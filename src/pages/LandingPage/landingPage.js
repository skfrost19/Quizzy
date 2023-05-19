import React, { useEffect, useRef, useState } from 'react'
import footerImage from '../../Assets/sysadmin_03.png'
import bookImage from '../../Assets/output-onlinegiftools (1).gif'
import './landingPage.css'
import { useNavigate } from 'react-router-dom'
const LandingPage = ({user,userEmail,setUserEmail}) => {
    // const [inputEmail,setInputEmail] = useState("")
    useEffect(()=>{
        setUserEmail("")
    },[])
    const navigate = useNavigate()
    const handleSubmit = ()=>{
        navigate("signup")
    }
    const changeInputValue = (e)=>{
        setUserEmail(e.target.value)
    }
  return (
    <>
    <div className='hero-section-container'>
        <div className='website-title-tag'>
            <div>
            <div
               style={{display:"flex",justifyContent:"center",alignItems:"center"}}
            >
                <div>
                <h1 className='typing-text' style={{fontSize:"50px"}}>Quizzy</h1> 
                <p>Learn Tech with Quiz</p>
                </div>
                <img src={bookImage} style ={{width:"100px",height:"100px"}} alt="book Image"/>
            </div>
            </div>
            {/* <div> */}
            {/* <p class="typing-text">Hello, world!</p>
            <p class="typing-text">Welcome to my website.</p>
            <p class="typing-text">Feel free to explore.</p>

            </div> */}
            {!user && 
            <div className='hero-section-signup-button'>
                <form>
                <p style={{fontSize:"25px",fontWeight:"800",marginBottom:"10px"}}>START YOUR NEW JOURNEY</p>
                <input type="email" value={userEmail} onChange={(e)=>changeInputValue(e)} placeholder='abc@gmail.com' />
                <button onClick={handleSubmit}>signup</button>
                </form>
            </div>
            }
        </div>
      <div className='hero-section-image'>
         <img src={footerImage} alt="image" />
      </div>
    </div>
    {/* <div className='main-section'>
        <h1>How to learn</h1>
        <div className='learning-line'>
        <div>
            <p>Basic foundation Questions</p>
            <p>Intermediate Level Questions</p>
            <p>Advance Level Questions</p>
        </div>
        <div className='vertical-line'></div>
        <div >
            <p>Test for basic Questions</p>
            <p>Test for Intermediate Level Questions</p>
            <p>Industry Level Real life Questions</p>
        </div>
        </div> */}
    {/* </div> */}
    </>
  )
}

export default LandingPage
