import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import QuizHomePage from './pages/Quiz Home Page/QuizHomePage'
import Login from './pages/Auths/Login'
import Signup from './pages/Auths/Signup'
import ForgetPassword from './pages/Auths/ForgetPassword'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Quiz from './pages/Quiz Test Page/Quiz'
import QuizPalletPage from './pages/Quiz Test Page/QuizPallet/QuizPalletPage'
import UserDashboard from './pages/Dashboard/UserDashboard'
import QuizMaker from './pages/QuizMaker/QuizMaker'
import CreatorDashboard from './pages/CreatorDashboard/CreatorDashboard'
import LandingPage from './pages/LandingPage/landingPage'

const App = () => {
  const [user,setUser] = useState(null)
  const [userEmail,setUserEmail] = useState("")
  const [loadQuiz,setLoadQuiz] = useState(null)
  const [topic,setTopic] = useState(null)
  const [quizPage,setQuizPage] = useState(false)
  
  useEffect(()=>{

    const get_user = JSON.parse(sessionStorage.getItem('user'))
    setUser(get_user)
  },[])

  return (
    <div>
      {
        user && user.role==="creator"?
        <CreatorDashboard user={user} setUser={setUser} />
        :
      <BrowserRouter>
        {!quizPage && <Navbar user={user} setUser={setUser} />}
        <Routes>
        <Route path="/" element={<LandingPage user={user} userEmail={userEmail} setUserEmail={setUserEmail}/>}/>
        <Route path="quizHomePage" element={user ? <QuizHomePage user={user} setTopic={setTopic} quizPage={quizPage} setQuizPage={setQuizPage}/>:<Login setUser={setUser}/>}/>
        <Route path="signup" element={user?<QuizHomePage user={user} setTopic={setTopic} quizPage={quizPage} setQuizPage={setQuizPage}/>:<Signup userEmail={userEmail} setUserEmail={setUserEmail}/>}/>
        <Route path="forget" element={user ? <QuizHomePage user={user} setTopic={setTopic} quizPage={quizPage} setQuizPage={setQuizPage}/> :<ForgetPassword/>}/>
        <Route path="login" element={user ? <QuizHomePage user={user} setTopic={setTopic} quizPage={quizPage} setQuizPage={setQuizPage}/>:<Login setUser={setUser}/>}/>
        <Route path="dailyQuiz" element={<Quiz user={user} quiz={loadQuiz}/>}/>
        <Route path="quizpallet" element={<QuizPalletPage user={user} setUser={setUser} topic={topic} quizPage={quizPage} setQuizPage={setQuizPage}/>}/>
        <Route path="user/:id" element={<UserDashboard user={user} />}/>
        <Route path="*" element={<div style={{display:"flex",width:"100%",height:"100vh",justifyContent:"center",alignItems:"center"}}><h1>Page Not Found</h1></div>}/>

        {/* <Route path="/" element={<Home user={user} setLoadQuiz={setLoadQuiz} setTopic={setTopic}/>}/> */}
        {/* <Route path="quiz" element={<Quiz user={user} quiz={loadQuiz}/>}/> */}
        {/* <Route path="quizMaker" element={<QuizMaker user={user} />}/> */}
        {/* <Route path="creatorDashboard" element={<CreatorDashboard user={user} />}/> */}
        </Routes>
      </BrowserRouter>
      }    
    </div>
  )
}

export default App
