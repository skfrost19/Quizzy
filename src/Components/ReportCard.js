import React, { useState } from 'react'
import AnswerSheetModel from './AnswerSheetModel'

const ReportCard = ({item,index}) => {
    const [isView,setIsView] = useState(false)
    const handleView=()=>{
        setIsView(true)
        console.log("view")
    }
  return (
    <>
    {
        isView && <AnswerSheetModel item={item} setIsView={setIsView} isView={isView}/>
    }
    <div className='report-card'>
      <p>{index+1}.</p>
      <p>{item.topic}</p>
      <p>{item.date}</p>
      <p>{item.marks}</p>
      <p className='view-btn' onClick={handleView}>View</p>
    </div>
    </>
  )
}

export default ReportCard
