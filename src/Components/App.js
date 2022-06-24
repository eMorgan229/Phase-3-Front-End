import React, {useState, useEffect}from "react";
import MainFeedContainer from './MainFeedContainer';
import NewQuestionForm from './NewQuestionForm';
import SearchUser from './SearchUser';
import TitleBar from './TitleBar';

function App() {
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState([])


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

  function handleDeleteQuestion(deleteQuestion){
      const updatedQuestion = questions.filter((q) => q.id !== deleteQuestion.id)
      setQuestions(updatedQuestion)
  }


  function handleLikeClick(answerLikes){
    setAnswers(answers.map((answer) => {
      if (answer.id === answerLikes.id) {
        return answerLikes
      } else {
        return answer;
      }
    }))
  }


  return (
    <div className="app">
        <TitleBar />
      <div className="flexMe">
      <div className="flexDirection sidebar">
        <NewQuestionForm onAddQuestion={handleAddQuestion}/>
        <SearchUser/>
      </div>
      <MainFeedContainer 
      questions={questions}
      onDeleteQuestion={handleDeleteQuestion}
      onUpdateLikes={handleLikeClick}
      />
      </div>
    </div>
  );
}

export default App;
