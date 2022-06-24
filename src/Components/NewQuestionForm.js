import React, {useState} from 'react'

function NewQuestionForm({onAddQuestion, onAddUser}) {

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
      })

    }).then(res => res.json())
    .then(data => onAddQuestion(data))

    fetch ("http://localhost:9292/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user,
      })
    })
    .then(res => res.json())
    .then(data => onAddUser(data))

    console.log(user)
    console.log(question)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create A Question</h2>
      <input type="text" placeholder="Your Question Here..."  onChange={(e) => setQuestion(e.target.value)}  required/>
      <input type="text" placeholder="Create a User Name" onChange ={(e) => setUser(e.target.value)} required/>
      <button type="submit">Submit</button>
    </form>
  )
}

export default NewQuestionForm