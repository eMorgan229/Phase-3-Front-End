import React from 'react'
import QuestionCard from './QuestionCard'

function MainFeedContainer({questions}) {
  return (
    <div className="poems-container">
      {questions.map (question =>{
      return (
        <QuestionCard 
          question={question}
          />
      )
      })}
    </div>
  )
}

export default MainFeedContainer