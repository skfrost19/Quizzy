import React,{useState} from 'react'
import { useNavigate } from 'react-router'
import confuse from '../../Assets/confused.png'


const ForgetPassword = () => {

  // here we have  different states that we need to validiate the input in the form 
  const [userId,setUserId] = useState("")
  const [isUser,setIsUser] = useState(false)
  const [newPassword,setNewPassword] = useState("")
  const [newPasswordConfirm,setNewPasswordConfirm] = useState("")
  // this caution is used to show warning if any voilation has been detected in the form input on submission
  const [caution,setCaution]=useState(null)
  const navigate = useNavigate()

  // this will run on submit  and validiate the form and navigate or show caution accordingly
  const changePassword = (e)=>{
    e.preventDefault()
    const get_user = JSON.parse(localStorage.getItem('users'))
    get_user && get_user.forEach(element => {
      if(userId===element.userId){
        element.password = newPassword
      }
    });
    localStorage.setItem('users',JSON.stringify(get_user))
    setNewPassword("")
    setNewPasswordConfirm("")
    navigate("/login")
  }
  
  // this method will check if the userID mention in input field of userID is in DB or not
  const handleCheckUserID=(e)=>{
    e.preventDefault()
    const get_user = JSON.parse(localStorage.getItem('users'))
    get_user && get_user.forEach(element => {
      if(userId===element.userId){
        setIsUser(true)
      }
    });

    !isUser && setCaution("Wrong user id")
  }

  return (
    <div className='form-outer-div'>
    <div className='confuse-pic-div'>
      <img src={confuse} className="confuse-user-pic" alt="confuse"/>
    </div>
    <div className='create-account-form forget-form'>
      {
        isUser ?
        <>
        <h1>Set Password</h1>
        <form className='create-form' onSubmit={changePassword}>
          <label>New Password</label>
          <input type="text" placeholder='Enter Password' value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} />
          <label>Confirm New Password</label>
          <input type="text" placeholder='confirm password'value={newPasswordConfirm} onChange={(e)=>setNewPasswordConfirm(e.target.value)}/>
          <button type="text" className='create-btn'>Set password</button>
        </form>
        </>
        :
        <>
        <h1>Forget Password</h1>
        <form className='create-form' onSubmit={handleCheckUserID}>
        <label>User ID</label>
          <input type="text" placeholder='User ID' value={userId} onChange={(e)=>setUserId(e.target.value)}/>
          {
            caution && <p className='caution'>{caution}</p>
          }
          <button className='create-btn' type='submit' >Next</button>
        </form>
        </>

        
      }
    </div>
    </div>

  )
}

export default ForgetPassword
