import React, { useEffect,useState } from 'react'
import VideoSolutionPart from '../../../Components/Pallet'
import QuestionPart from '../../../Components/QuestionSection'
import data from '../../../Data/data'
import './QuizPallet.css'
import { result } from '../../../Utility/utility'
import Submission from '../../../Components/Submission'

//  this is the quiz taking page 
const LearningPlatform = ({user,topic,quizPage,setQuizPage}) => {

  // different states for maintaing questions ,options selected, question on review, visited question , unvisited question.
  const [questionSet,setQuestionSet] = useState(null)
  const [currentQuestion,setCurrentQuestion] = useState(null)
  const [answers,setAnswers] = useState(null)
  const [finalSubmit,setFinalSubmit] = useState(false)
  
  // this method will the question and options for this page
  useEffect(()=>{
    setQuizPage(true)
    console.log("main useeffect render")
    const quiz = []
    data.forEach((item)=>{
      if(item.topic.toUpperCase()===topic){
        quiz.push(item)
      }
    })
    const temp = quiz[0].quiz.map((item)=>{
      const temp1 = {...item}
      const temp2 = temp1.options.map((ele=>{
        return {value:ele,isSelected:false}
      }))
      temp1.options = temp2
      temp1.status = "not visited"
      return temp1
    })

    setQuestionSet(temp)
    const tempquestion = temp[0]
    setCurrentQuestion(tempquestion)
    let  len = temp.length;
    console.log("length",len)
    setAnswers(Array(len).fill(null))
    // eslint-disable-next-line

    return()=>{
      setQuizPage(false)
    }
  },[])

  // handled the onSubmit btn of warning modal
  const handleResult=()=>{
    const response = result(questionSet,answers)
    const temp = {
      topic:topic,
      marks:`${response.total}/${response.marks}`,
      total:response.total,
      questionSet:questionSet,
      answers:answers,
      chartDate:new Date().toLocaleDateString(),
      time:new Date().toLocaleTimeString(),
      date:new Date().toDateString(),
    }
    const users = JSON.parse(localStorage.getItem('users'))
    // eslint-disable-next-line
    users.map(item=>{
      if(item.userId===user.userId){
        item.dailyQuiz.push(temp)
      }
    })
    localStorage.setItem('users',JSON.stringify(users))
  }

  return (
    <>
     {finalSubmit && <Submission handleResult={handleResult} answers={answers} setFinalSubmit={setFinalSubmit}/>}
      <div className='quiz-pallet-page'>
        <QuestionPart 
          currentQuestion={currentQuestion} 
          setCurrentQuestion={setCurrentQuestion} 
          questionSet={questionSet} 
          setQuestionSet={setQuestionSet}
          answers={answers}
          setAnswers={setAnswers}
        />
        <VideoSolutionPart questionSet={questionSet} 
          setQuestionSet={setQuestionSet} 
          currentQuestion={currentQuestion} 
          setCurrentQuestion={setCurrentQuestion}
          setFinalSubmit={setFinalSubmit}
        />
    </div>
    </>
  )
}

export default LearningPlatform
