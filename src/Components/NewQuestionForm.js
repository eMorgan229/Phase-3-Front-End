import React, {useState} from 'react'

function NewQuestionForm({onAddQuestion}) {

  const [question, setQuestion] =useState("")
  const [user, setUser] = useState("")
  const [userLength, setUserLength] = useState('');

  function handleSubmit(e){
      e.preventDefault()
      fetch("http://localhost:9292/users")
      .then(res=> res.json())
      .then(data=> setUserLength(data))

      fetch ("http://localhost:9292/questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: question,
        user_id: userLength.length + 1
      }),
    })
    

    fetch ("http://localhost:9292/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: user,
      }),
    })

  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create A Question</h2>
      <input type="text" placeholder="Your Question Here..." value={question}onChange={(e) => setQuestion(e.target.value)}/>
      <input type="text" placeholder="Create a User Name"  value={user}onChange ={(e) => setUser(e.target.value)}/>
      <button type="submit">Submit</button>
    </form>
  )
}

export default NewQuestionForm