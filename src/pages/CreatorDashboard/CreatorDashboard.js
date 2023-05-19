import React, { useState } from 'react'
import './CreatorDashboard.css'
import CreateNewQuiz from '../../Components/CreateNewQuiz/CreateNewQuiz'
import CreateDailyQuiz from '../../Components/CreateDailyQuiz/CreateDailyQuiz'
import AllQuiz from '../../Components/AllQuiz/AllQuiz'
const CreatorDashboard = ({user,setUser}) => {
  const [selectedTab,setSelectedTab] = useState("createNewQuiz")
  const handleSignOut=()=>{
    setUser("")
  }
  const handleSelectTab = (e)=>{
    if(e.target.innerText==="Create New Quiz"){
      setSelectedTab("createNewQuiz")
    }else if(e.target.innerText==="Create Daily Quiz"){
      setSelectedTab("createDailyQuiz")
    }else{
      setSelectedTab("allQuiz")
    }
  }
  return (
    <div>
      {/* <div>
        CreatorDashboard
      </div> */}
      <div className='main-creator-dashboard-page'>
        <div className='sideNavBar'>
          <p onClick={(e)=>{handleSelectTab(e)}} className={selectedTab==="createNewQuiz"?'tab selected':"tab"}>Create New Quiz</p>
          <p onClick={(e)=>{handleSelectTab(e)}} className={selectedTab==="createDailyQuiz"?'tab selected':"tab"}>Create Daily Quiz</p>
          <p onClick={(e)=>{handleSelectTab(e)}} className={selectedTab==="allQuiz"?'tab selected':"tab"}>All Quiz</p>
          <p onClick={handleSignOut} className='creator-signout-btn'>SignOut</p>
        </div>
        {/* <div className='vertical-line'></div> */}
        <div className='main-page-secction'>
          {selectedTab==="createNewQuiz" && <CreateNewQuiz user={user}/>}
          {selectedTab==="createDailyQuiz" && <CreateDailyQuiz/>}
          {selectedTab==="allQuiz" && <AllQuiz/>}
        </div>
      </div>
    </div>
  )
}

export default CreatorDashboard
