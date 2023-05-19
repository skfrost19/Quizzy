import React, { useEffect, useState } from 'react'

const QuestionPart = ({currentQuestion,setCurrentQuestion,questionSet,setQuestionSet,answers,setAnswers}) => {
    const [choose,setChoose] = useState(false)

    useEffect(()=>{
        if(currentQuestion){
            const temp = {...currentQuestion}
            let change = false
            temp.options.map((opt)=>{
                if(opt.isSelected) change = true
                return opt
            })
            change?setChoose(true):setChoose(false)
        } 
    },[currentQuestion])

    const handleSelect=(index)=>{
        if(currentQuestion.options[index].isSelected){
            const temp = {...currentQuestion}
            const temp1=temp.options.map((opt)=>{
                return {...opt,isSelected:false}
            })
            temp.options = temp1
            setCurrentQuestion(temp)
        }else{
            const temp = {...currentQuestion}
            const temp1=temp.options.map((opt,ind)=>{
                if(index===ind) return {...opt,isSelected:true}
                else return {...opt,isSelected:false}
            })
            temp.options = temp1
            setCurrentQuestion(temp)
        }
    }

    const handelUltility=(type)=>{
        const temp = [...questionSet]
        switch(type){
            case "save": temp[currentQuestion.id-1].status="save"
                         temp[currentQuestion.id-1].options = currentQuestion.options
                         const tempAns = [...answers]
                         // eslint-disable-next-line
                         temp[currentQuestion.id-1].options.map((opt)=>{
                            if(opt.isSelected) tempAns[currentQuestion.id-1]=opt.value
                         })
                         setAnswers(tempAns)
                         break;
            case "review": temp[currentQuestion.id-1].status="review"
                           if(answers[currentQuestion.id-1]){
                            const tmpAns = [...answers]
                            tmpAns[currentQuestion.id-1]=null
                            setAnswers(tmpAns)
                            // eslint-disable-next-line
                            temp[currentQuestion.id-1].options.map(opt=>{
                              opt.isSelected=false
                            })
                           }
                          break;
            case "next" : if(temp[currentQuestion.id-1].status==="not visited")
                            temp[currentQuestion.id-1].status="visited"
                          break;
            default :break;
        }
        
        setQuestionSet(temp)
        let count=questionSet.length;
        // questionSet.forEach(element => {
        //     count++
        // });
        if(count===currentQuestion.id){
            const nextQuestion = questionSet[0]
            setCurrentQuestion(nextQuestion)
        }else{
            const nextQuestion = questionSet[currentQuestion.id]
            setCurrentQuestion(nextQuestion)
        }
    }

  return (
    <div className='question-section'>
    {
      currentQuestion && <p className='question'>{currentQuestion.id}. {currentQuestion.question}</p>
    }
    <div className='question-section-options'>
      <div className='options-section'>
      {
        currentQuestion && currentQuestion.options.map((item,index)=>{
            // options button
          return <button
                  key={item.value+index}
                  onClick={()=>handleSelect(index)}
                  className='option-btn'
                  style={{backgroundColor:item.isSelected?"rgb(228, 153, 48)":"rgb(223, 223, 113)"}}
                >
                  {item.value}
                </button>
        })
      }
      </div>
      <div className='utility-btns'>
        {/* ulility buttons */}
        <button className='save-btn' onClick={()=>handelUltility("save")} style={{cursor:choose?"pointer":"not-allowed"}} disabled={choose?false:true}>SAVE</button>
        <button className='review-btn' onClick={()=>handelUltility("review")}>Review</button>
        <button className='next-btn'onClick={()=>handelUltility("next")}>Next</button>
      </div>
    </div>
  </div>

  )
}

export default QuestionPart


