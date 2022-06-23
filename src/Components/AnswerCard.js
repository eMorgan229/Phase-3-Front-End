import React from 'react'

function AnswerCard({answer}) {
  return (
    <div>
        <h3>
        {answer.answer}
        </h3>
        <ul>{answer.likes}</ul>
        <button>like</button>
    </div>
  )
}

export default AnswerCard