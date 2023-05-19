import React from 'react'
import './QuizMaker.css'
import { useState } from 'react'
import { useEffect } from 'react'
import {v4 as uuid} from 'uuid'

const QuizMaker = ({user}) => {
    const [quiz,setQuiz] = useState({})
    const [quizName,setQuizName] = useState(undefined)
    const [question,setQuestion] = useState("")
    const [options,setOptions] = useState(["","","",""])
    useEffect(()=>{
        const temp = {
            quizName:undefined,
            quizId:uuid(),
            quizMaker:user?user.name:"",
            questions:[]
        }
        setQuiz(temp)
    },[])

    const handleQuizNameSubmit=()=>{
        setQuiz({...quiz,quizName:quizName})
    }

    const handleSetOptions=(e,ind)=>{
        console.log(e.target.value)
        setOptions(prev=>{
            prev.map((option,index)=>{
                if(index===ind){
                    option = e.target.value
                }
                return option
            })
        })
    }
    console.log(options)
  return(
    <div>
        {
            !quiz.quizName ? 
            <div className='set-quiz-name'>
                <div className='input-fields'>
                <label>Quiz Name</label>
                <input type="text" value={quizName} onChange={(e)=>setQuizName(e.target.value)} placeholder='Quiz name'/>
                <button onClick={handleQuizNameSubmit}>Next</button>
                </div>
                <div>
                    <h3>{quizName}</h3>
                </div>
            </div>
            :
            <div className='set-quiz-question'>
                <p>Question No. {quiz.questions.length +1}</p>
                <p>Question</p>
                <input type="text" value={question} onChange={(e)=>setQuestion(e.target.value)} placeholder='Ex: What is HTML?'/>
                <label>Option 1.</label>
                <input type="text" placeholder='Option one' value={options[0]} onChange={(e)=>handleSetOptions(e,0)}/>
                <label>Option 2.</label>
                <input type="text" placeholder='Option one' value={options[0]} onChange={(e)=>handleSetOptions(e,0)}/>
                <label>Option 3.</label>
                <input type="text" placeholder='Option one' value={options[0]} onChange={(e)=>handleSetOptions(e,0)}/>
                <label>Option 4.</label>
                <input type="text" placeholder='Option one' value={options[0]} onChange={(e)=>handleSetOptions(e,0)}/>
                <label>Answer</label>
                <input type="text" placeholder='Option one' value={options[0]} onChange={(e)=>handleSetOptions(e,0)}/>
                <button>Next</button>
                <div className='sub-btn pre-btn'>
                    <button>Submit</button>
                    <button>Preview</button>
                </div>
            </div>
        }
    </div>
  )
}

export default QuizMaker
