import React,{useState} from 'react'
import { useNavigate ,Link} from 'react-router-dom'
import man from '../../Assets/man.png'
// import {Link} from 'react-router-dom'
const Login = ({setUser}) => {
  const [userId,setUserId] = useState("")
  const [password,setPassword] = useState("")
  // const [isUser,setIsUser] = useState(false)
  const [caution,setCaution] = useState(null)
  const navigate = useNavigate()


  // on form submit this method will run and post data to server for validiation
  const handleLogin = (e)=>{
    e.preventDefault()
    const get_users = JSON.parse(localStorage.getItem('users'))
    get_users && get_users.forEach(element => {
      if(userId===element.userId && password===element.password){
        setUser(element)
        // setIsUser(true)
        setCaution(null)
        console.log("user is set")
        sessionStorage.setItem('user',JSON.stringify(element))
        navigate("/")
      }else{
        console.log("caution setr")
        setCaution("Incorrect UserId or Password")
      }
    });
    setCaution("No user in DB")
    // isUser ? navigate("/") : setCaution("UserId doesn't Exist")
  }
  

  return (
    <div className='form-outer-div'>
    <div className='user-pic-div'>
      <img src={man} className="user-pic" alt="user"/>
    </div>
    <div className='create-account-form login-form'>
      <h1>LOGIN</h1>
      <form className='create-form' onSubmit={handleLogin}>
      {
       caution && <p className='caution'>{caution}</p>
      }
      <label>User ID</label>
        <input type="text" placeholder='User ID' value={userId} onChange={(e)=>setUserId(e.target.value)}/>
      <label>Password</label>
        <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <div className='btns'>
        <button className='create-btn' type='submit' >Login</button>
        <button className='forget-btn' onClick={()=>navigate("/forget")} >Forgot Password</button>
      </div>
      <p className='already-have-account'><Link to="/signup">New User</Link></p>
      </form>
    </div>
    </div>
  )
}

export default Login
