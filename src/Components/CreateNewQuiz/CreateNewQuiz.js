import React, { useState,useRef } from 'react';
import './CreateNewQuiz.css'

const QuizForm = () => {
  const [quizName, setQuizName] = useState('');
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [answer, setAnswer] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [current,setCurrent] = useState(0)
  const fileInputRef = useRef(null);

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleAddQuestion = () => {
    if(/^\s*$/.test(question)){
      alert("please enter a valid question")
      return
    }
    for(let i=0;i<4;i++){
      if(/^\s*$/.test(options[i])){
        alert("please enter a valid option")
        return
      }
    }
    if(/^\s*$/.test(answer)){
      alert("please enter a valid question")
      return
    }
    const newQuestion = {
      question,
      options,
      answer,
      videoFile,
    };
    setQuestions([...questions, newQuestion]);

    // Reset form fields
    setQuestion('');
    setOptions(['', '', '', '']);
    setAnswer('');
    setVideoFile(null);
    if(fileInputRef.current){
      fileInputRef.current.value=""
    }
  };

  const handleResetForm = () => {
    setQuizName('');
    setQuestion('');
    setOptions(['', '', '', '']);
    setAnswer('');
    setVideoFile(null);
    setQuestions([]);
    if(fileInputRef.current){
      fileInputRef.current.value=""
    }
  };

  const handleSubmit = () => {
    // Perform final submission of all questions
    if(fileInputRef.current){
      fileInputRef.current.value=""
    }
    console.log(questions);
  };
  
  const handleDotClick = (index)=>{
    setCurrent(index)
    const tempQuestion = questions[index]
    setQuestion(tempQuestion.question)
    setOptions(tempQuestion.options)
    setAnswer(tempQuestion.answer)
    setVideoFile(tempQuestion.videoFile)

    
  }

  const canSubmit = questions.length >= 5;

  return (
    <div className='new-quiz-form-container'>
      <h1>Create Quiz</h1>
      <p>Minimum 5 question for submission</p>
      <form className='new-quiz-form'>
        <div className='new-quiz-name'>
          <label htmlFor="quizName">Quiz Name:</label>
          <input
            required
            type="text"
            id="quizName"
            value={quizName}
            onChange={(e) => setQuizName((e.target.value).toUpperCase())}
          />
        </div>
        <div className='new-quiz-form-question'>
          <label htmlFor="question">{`Question ${questions.length+1}`}</label>
          <input
            type="text"
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </div>
        <div className='new-quiz-form-options'>
          <p>Options:</p>
          {options.map((option, index) => (
            <div className='option-field'>
            <p>{index+1}</p>
            <input
              key={index}
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              required
            />
            </div>
          ))}
        </div>
        <div className='new-quiz-form-answer'>
          <label htmlFor="answer">Correct Answer:</label>
          <input
            type="text"
            id="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          />
        </div>
        <div className='new-quiz-form-video-file'>
          <label htmlFor="videoFile">Video Solution:</label>
          <input
            type="file"
            id={`videoFile${questions.length}`}
            ref={fileInputRef}
            onChange={(e) => setVideoFile(e.target.files[0].name)}
          />
        </div>
        <div className='new-quiz-form-question-dots'>
          <label>Questions</label>
          <div className='dots-row'>
          {
            questions.map((item,index)=>{
              return <button type="button" key={index+item.answer} onClick={()=>handleDotClick(index)} className={current===index?"dot-que-btn active-dot":"dot-que-btn"}>{index+1}</button>
            })
          }
          </div>
        </div>
        <div className='new-quiz-form-btns-container'>
          <button className='new-quiz-form-add-btn' onClick={handleAddQuestion}>
            Add +
          </button>
          <button className='new-quiz-form-reset-btn' onClick={handleResetForm}>
            Reset Form
          </button>
          <button className='new-quiz-form-submit-btn' onClick={handleSubmit} disabled={!canSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuizForm;
