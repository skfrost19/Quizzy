import React from 'react'

const Pallet = ({questionSet,setQuestionSet,currentQuestion,setCurrentQuestion,setFinalSubmit}) => {

  const pickColor=(status)=>{
    switch(status){
      case "not visited": return "red"
      case "visited":return "orange"
      case "save":return "green"
      case "review":return "purple"
      default: return "purple"
    }
  }

  const handlePalletBtnClick=(question)=>{
    if(question.id===currentQuestion.id) return
    const temp = [...questionSet]

    if(temp[currentQuestion.id-1].status==="not visited"){
      temp[currentQuestion.id-1].status="visited"
      setQuestionSet(temp)
    }
    setCurrentQuestion(question)
  }


  return (
  <div className='question-pallet-section'>
  <div className='question-pallet-section-btns'>
  {
    questionSet && questionSet.map((item,index)=>{
      return <button key={item.id+index}
                    className='question-pallet-btn'
                    onClick={()=>handlePalletBtnClick(item)}
                    style={{backgroundColor:pickColor(item.status),borderColor:item.id===currentQuestion.id?"white":"transparent"}}
              >
                {item.id}
              </button>
    })
  }
  </div>
  <div className='hint-bar'>
    <div>
      <button className='saveBtn'></button>
      <p>SAVE</p>
    </div>
    <div>
      <button className='reviewBtn'></button>
      <p>Review</p>
    </div>
    <div>
      <button className='visitedBtn'></button>
      <p>Visited</p>
    </div>
    <div>
      <button className='unvisitedBtn'></button>
      <p>Not Visited</p>
    </div>
    <div className='test-submit-btn'>
      <button className='submit' onClick={()=>setFinalSubmit(true)}>Submit</button>
    </div>
  </div>
</div>

  )
}

export default Pallet
