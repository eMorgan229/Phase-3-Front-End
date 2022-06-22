import React from 'react'
import AnswerCard from './AnswerCard'

function QuestionCard() {
  return (
    <div>QuestionCard
      <h1>I am the Question Card Test</h1>
      <AnswerCard/>
      <input placeholder="add your answer..."/> 
        <input placeholder="username"/>
        <button>submit</button>
    </div>
  )
}

export default QuestionCard