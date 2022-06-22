import React, {useState, useEffect}from 'react'
import AnswerCard from './AnswerCard'

function QuestionCard({question}) {
   const [answers, setAnswers] = useState([])

  useEffect(() => {
      fetch (`http://localhost:9292/answers/${question.id}`)
      .then(r => r.json())
      .then(data => {
        console.log(data, `this is for question ${question.id}`)
        setAnswers(data)
      })
  }
  ,[])

  // function renderAnswers(){
  //   {answers.map(answer => {
  //     return (
  //       <AnswerCard answer={answer}/>)}
  //   )}

  return (
    <div>QuestionCard
      <h1>{question.question}</h1>
      <div>
        {answers.map(answer => {
      return (
        <AnswerCard answer={answer}/>)}
    )}
      
      </div>
      
      
      <input placeholder="add your answer..."/> 
        <input placeholder="username"/>
        <button>submit</button>
    </div>
  )
}

export default QuestionCard