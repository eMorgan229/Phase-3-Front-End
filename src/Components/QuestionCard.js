import React, {useState, useEffect}from 'react'
import AnswerCard from './AnswerCard'

function QuestionCard({question, onDeleteQuestion, onUpdateLikes}) {
   const [answers, setAnswers] = useState([])

  useEffect(() => {
      fetch (`http://localhost:9292/answers/${question.id}`)
      .then(r => r.json())
      .then(data => {
        // console.log(data, `this is for question ${question.id}`)
        setAnswers(data)
      },)
  }
  ,[])

  function handleDeleteClick(){
    fetch (`http://localhost:9292/questions/${question.id}`, {
      method: 'DELETE',
    })
    .then(r =>  r.json())
    .then(() => 
      // console.log("deleted!"),
      onDeleteQuestion(question)
    )
  }


  function handleAddAnswer(newAnswer){
    setAnswers([...answers, newAnswer])
}

  return (
    <div>
      <h2>{question.question}</h2>
      <h3>{question.user.name}</h3>
      <button onClick={handleDeleteClick}>Delete</button>
      <div>
        {answers.map(answer => {
      return (
        <AnswerCard 
        theanswer={answer}
        onUpdateLikes={onUpdateLikes}
        onAddAnswer={handleAddAnswer}
        />)}
    )}
      
      </div>
    </div>
  )
}

export default QuestionCard