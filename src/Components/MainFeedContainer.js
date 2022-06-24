import React from 'react'
import QuestionCard from './QuestionCard'

function MainFeedContainer({questions, onDeleteQuestion, onUpdateLikes}) {
  return (
    
    <div className="flexDirection">
    
      {questions.map (question =>{
      return (
        <QuestionCard 
          question={question}
          onDeleteQuestion={onDeleteQuestion}
          onUpdateLikes={onUpdateLikes}
          /> 
      )
      })}
    </div>
  )
}

export default MainFeedContainer