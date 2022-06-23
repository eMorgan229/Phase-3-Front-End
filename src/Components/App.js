import React, {useState, useEffect}from "react";
import MainFeedContainer from './MainFeedContainer';
import NewQuestionForm from './NewQuestionForm';
import SearchUser from './SearchUser';
import TitleBar from './TitleBar';

function App() {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/questions")
    .then(r => r.json())
    .then((data) => 

    setQuestions(data)
    
    )
  }, []);

  function handleAddQuestion(newQuestion){
    setQuestions([...questions, newQuestion])
  }


  return (
    <div className="app">
      <TitleBar/>
    <div className="sidebar">
      <NewQuestionForm onAddQuestion={handleAddQuestion}/>
      <SearchUser/>
    </div>
    <MainFeedContainer 
    questions={questions}
    />
  </div>
  );
}

export default App;
