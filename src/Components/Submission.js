import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
const Submission = ({handleResult,answers,setFinalSubmit}) => {
  const [attempted,setAttempted] = useState(0)

  useEffect(()=>{
    let count=0
    answers.forEach(element => {
      if(element) count++
    });
    setAttempted(count)
    // eslint-disable-next-line
  },[])
  return (
    <div className='final-submission-modal'>
        <div className='final-submit-container'>
          <p>Are you sure to submit</p>
          {
            <div className='total-attempted'>
              <p>Total Attempted</p>
              <p><spam className="attempted">{attempted}</spam>/<spam className="answers-length">{answers.length}</spam></p>
            </div>
          }
          <div className='btns-section'>
            <Link to="/"><button onClick={handleResult} className="final-submission-btn">Submit</button></Link>
            <button onClick={()=>setFinalSubmit(false)} className="back-btn">Back</button>
          </div>
        </div>
    </div>
  )
}

export default Submission
