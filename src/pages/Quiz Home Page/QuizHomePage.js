import React,{useEffect, useState} from 'react'
import { python,java,react,sql,Search,Link,Card} from '../../All Imports/imports'
import data from '../../Data/data'

const QuizHomePage = ({user,setLoadQuiz,setTopic,quizPage,setQuizPage}) => {
  // const quiz = ["SQL","DBMS","MySQL","JavaScript","Java","C++","SQL","DBMS","MySQL","Java","JavaScript","C++"]

  // this state will hold the name of the quizes fetched from server
  const [quiz,setQuiz] = useState(null)

  // this state will contain the all the data .ie questions and options of selected quiz
  const [selectedQuiz,setSelectedQuiz] = useState(null)
  

  // this method or hook will run very first time our website is open and here we fetch the quizes name and save it in quiz state
  useEffect(()=>{
    let quizes =[] 
    quizes = data.map(item=>{
      // console.log(item.topic)
      return item.topic.toUpperCase()
      //  quizes.push(item.topic.toUpperCase())
    })
    // console.log(quizes)
    setQuiz(quizes)
  },[])
  
  // this method run when we select any quiz and this is set the state of loadQuiz and selected quiz 
  const handleSelect=(item,e)=>{
    // console.log(item)
    if(item===selectedQuiz){
      setSelectedQuiz(null)
      setLoadQuiz(null)
      return
    }
    let temp 
    data.forEach(element => {
      if(element.topic.toUpperCase()===item){
        temp=[...element]
      }
    });
    let correct_options = temp.quiz.map(item=>{
      return item.answer
    })
    console.log(correct_options)
    setLoadQuiz(temp)
    setSelectedQuiz(item)
  }

  return (
    <div className='quiz-home-page'>
      {/* <Link to="quizMaker"><button className="create-quiz-btn">Create Quiz</button></Link> */}
      <h1>Quizzy</h1>
      <Search/>
      {
        user &&
        <div className='select-quiz'>
        {
          quiz && quiz.map((item,index)=>{
            return <p className='select-quiz-btn' key={item+index} onClick={(e)=>handleSelect(item,e)}>{item}</p>
          })
        }
        </div>
      }
      {
        user ?
        <div className='start-quiz'>
          {
            selectedQuiz &&
            <>
              <p>{selectedQuiz}</p>
              <button className='start-quiz-btn'><Link to="/dailyQuiz" style={{textDecoration:"none",color:"white"}}>Play Quiz</Link></button> 
            </>
          }
        </div>:
        <div className='start-quiz'>
          {
            selectedQuiz && 
            <>
              <p>{selectedQuiz}</p>
              <button className='start-quiz-btn'><Link to="/signup" style={{textDecoration:"none",color:"white"}}>Play Quiz</Link></button>
            </>
          }
        </div>
      }

      {/* daily quiz card section for different topics */}
      <div className='card-bar'>
        <Link 
          to={user?"/quizpallet":"/login"} 
          style={{textDecoration:"none"}} 
          onClick={()=>{
            // setQuizPage(true)
            setTopic("SQL")
          }
        }>
          <Card topic="SQL" image={sql}/>
        </Link>
        <Link 
          to={user?"/quizpallet":"/login"} 
          style={{textDecoration:"none"}} 
          onClick={()=>{
            // setQuizPage(true)
            setTopic("DBMS")
            }
          }>
            <Card topic="DBMS" image={react}/>
        </Link>
        <Link 
          to={user?"/quizpallet":"/login"} 
          style={{textDecoration:"none"}} 
          onClick={()=>{
            // setQuizPage(true)
            setTopic("PYTHON")
            }
          }>
            <Card topic="Python" image={python}/>
        </Link>
        <Link 
          to={user?"/quizpallet":"/login"} 
          style={{textDecoration:"none"}} 
          onClick={()=>{
            // setQuizPage(true)
            setTopic("JAVA")
            }
          }>
            <Card topic="Java" image={java}/>
        </Link>
      </div>
      
    </div>
  )
}

export default QuizHomePage
