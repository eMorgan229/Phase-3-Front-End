import React from 'react'

function AnswerCard({ theanswer, onUpdateLikes, onAddAnswer }) {
  
  const {id, likes, answer} = theanswer
  
  
  function handleLikeClick(){
    fetch (`http://localhost:9292/answers/${id}`, {
      method : 'PATCH',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: ++theanswer.likes, 
      })
  })  
    .then (response => response.json())
    .then (
      onUpdateLikes(likes)
      )
  }

  function handleAnswers(e){
    fetch(`http://localhost:9292/answers/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        answer: answer,
        likes: 0,
        question_id: id
      }),
    })
      .then((r) => r.json())
      .then(onAddAnswer);
  }


  return (
    <div>
        <h3>
          {answer}
        <button onClick={handleLikeClick}>{likes} Likes</button>
        </h3>
      
      <input placeholder="add your answer..."/> 
        {/* <input placeholder="username"/> */}
        <button onChange={handleAnswers} >submit</button>
    </div>
  )
}

export default AnswerCard