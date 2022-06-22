import React from 'react'

function AnswerCard({answer}) {
  return (
    <div>AnswerCard
        <h3>
        {answer.answer}
        </h3>
        <button>like</button>
    </div>
  )
}

export default AnswerCard