import React, { useEffect, useState } from 'react'
import man from '../../Assets/man.png'
import Chart from 'react-google-charts'
import ReportCard from '../../Components/ReportCard'

// this is user dashboard Page

const UserDashboard = ({user}) => {

    // this state contains the data of user and a function (setData) to set that "data" state
    const [data,setData] = useState([])

    // this is for toggling between subscription tab and daily quiz tab
    const [isDailyQuiz,setIsDailyQuiz] = useState(true)

    // this method will run when this page is mounted and we fetch the data from server and set the data using setData
    useEffect(()=>{

        let tempArr = [[{type:"date",id:'Date'},{type:'number',id:"marks"}]]
        // console.log(user)
        user.dailyQuiz.map(item=>{
            let arr = item.chartDate.split("/").reverse()
            let temp = [new Date(arr[0],arr[1],arr[2]),`marks ${item.marks}`]
            tempArr.push(temp)
        })        
        // console.log(tempArr)
        setData(tempArr)
    },[])
    // const data = [
    //     [{ type: 'date', id: 'Date' }, { type: 'number', id: 'Won/Loss' }],
    //     [new Date(2012,6,14),`marks :${marks}`],
    //     [new Date(2012, 4, 14), 38024],
    //     [new Date(2012, 3, 15), 38024],
    //     [new Date(2012, 3, 16), 38108],
    //     [new Date(2012, 3, 17), 38229],
    //     [new Date(2013, 1, 4), 38177],
    //     [new Date(2013, 1, 5), 38705],
    //     [new Date(2013, 1, 12), 38210],
    //     [new Date(2013, 1, 13), 38029],
    //     [new Date(2013, 1, 19), 38823],
    //     [new Date(2013, 1, 23), 38345],
    //     [new Date(2013, 1, 24), 38436],
    //     [new Date(2013, 2, 10), 38447],
    //   ]

  return (
    // header section of the user dasboard
    <div className='user-dashboard-container'>
        <div className='user-details-section'>
            <img src={man} alt="avatar"/>
            <p>{user.name}</p>
            <p>userID : @{user.userId}</p>
            <p>Level : Beginner</p>
        </div>
        {/* <hr/> */}
        <div className='hr'><hr/></div>

        {/* this is the daily quix and subscription tab section */}
        <div className='quiz-type-selection' style={{backgroundColor:isDailyQuiz?"rgb(200, 255, 127)":"aqua"}}>
            {/* <hr/> */}
            <p 
                className='daily-quiz-btn' 
                style={{borderRadius:isDailyQuiz?"none":"0px 0px 10px 0px"}} 
                onClick={()=>{
                    if(!isDailyQuiz) setIsDailyQuiz(!isDailyQuiz)
                }}>
                    Daily Quizes
            </p>
            <p 
                className='subscription-quiz-btn' 
                style={{borderRadius:isDailyQuiz?"none":"0px 0px 0px 10px"}} 
                onClick={()=>{
                    if(isDailyQuiz) setIsDailyQuiz(!isDailyQuiz)
                }}>
                    Subscription Quizes
            </p>
        </div>
        <div className='band' style={{backgroundColor:isDailyQuiz?"rgb(200, 255, 127)":"aqua"}}></div>
        {/* this is the chart which tells about the date on which user give test */}
        <div className='chart-section'>
              <Chart
                  width={1200}
                  height={300}
                  chartType="Calendar"
                  loader={<div>Loading Chart</div>}
                  data={data}
                  options={{
                    title: 'Daily Quiz Attendance',
                    calendar: { cellSize:17.5 },
                    noDataPattern: {
                        backgroundColor: 'grey',
                        color: 'green'
                      }
                  }}
                  rootProps={{ 'data-testid': '1' }}                
              />      
        </div>
        {/* this is the report section here user will get detail of their test and result  */}
        <p>Report</p>
        <div className='report-section'>
            {/* filter to sort test accordingly */}
            <div className='filter-section'>
                <select value="choose Topic">
                    <option selected="Choose Topic">Choose Topic</option>
                    <option value="SQL">SQL</option>
                    <option value="Python">Python</option>
                    <option value="Java">Java</option>
                    <option value="html">html</option>
                </select>
                <input type="text" placeholder='Date'/>
            </div>
            <div className='filtered-report-section'>
                <div className='reports-card-column'>
                    <p>S.NO</p>
                    <p>Topic</p>
                    <p>Date</p>
                    <p>Marks</p>
                    <p>Answer</p>
                </div>
                {
                    user.dailyQuiz.length  && user.dailyQuiz.map((item,index)=>{
                        return <ReportCard item={item} index={index}/>
                    })
                }
            </div>
        </div>
        
    </div>
  )
}

export default UserDashboard
