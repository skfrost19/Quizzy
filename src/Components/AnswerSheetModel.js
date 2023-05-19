import React from 'react'

const AnswerSheetModel = ({item,setIsView,isView}) => {
    const handleBack =()=>{
        setIsView(!isView)
    }
  return (
    <div className='answer-sheet-modal'>
        <div className='answer-sheet-container'>
            <p>{item.topic}</p>
            <div className='modal-btns'>
                <button className='btns' onClick={handleBack}>Back</button>
            </div>
        </div>
    </div>
  )
}

export default AnswerSheetModel
