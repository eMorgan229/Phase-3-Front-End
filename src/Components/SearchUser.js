import React, {useState, useEffect} from 'react'

function SearchUser({ searchTerm, onSearchChange }) {
const [text, setText] = useState('');

  useEffect(() => {
    console.log("useEffect called");
  })

// function handleSubmit(e) {
//   e.preventDefault()
// }


  return (
    <div>
        <input
        type="text" 
        placeholder="Search for a username"
        value={searchTerm}
        onChange={(e) => setText(e.target.value)}
        />
        <buttton>Submit</buttton>
    </div>
  )
}

export default SearchUser