import React from 'react'
// import data from '../../Data/data'
import Question from '../../Components/Question'


// this page is of no work right now but we will work on it soon
const Quiz = ({quiz}) => {
    // console.log(data)
    // const timer = useRef()
  return (
    <div>
        <div className='quiz-topbar'>
            {quiz && <p>{(quiz.topic).toUpperCase()}-Quiz - page</p>}
            {/* <Draggable bounds={{left:0,top:0,right:600,bottom:580}}>
                <p className='timer'>timer</p>
            </Draggable> */}
            <p>Timer</p>
        </div>
        {
            quiz ?
            quiz.quiz.map((element,index)=>{
                return <Question key={element+index} question={element}/>
            }):
            <p>No Quiz</p>
        }
    </div>
  )
}

export default Quiz
