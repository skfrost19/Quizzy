import React from 'react'

const Question = ({question}) => {
  return (
    <div className='question-container'>
      <div className='question'>{question.question}</div>
      {
        <div className='options'>
          {
            question.options.map((opt,index)=>{
              return <p key={opt} className="option">{index+1}. {opt}</p>
            })
          }
        </div>
      }
    </div>
  )
}

export default Question
