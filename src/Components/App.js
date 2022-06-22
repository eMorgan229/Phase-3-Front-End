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
    .then((data) => setQuestions(data)
    )
  }, []);


  return (
    <div className="app">
      <TitleBar/>
    <div className="sidebar">
      <NewQuestionForm/>
      <SearchUser/>
      {/* <button onClick={handleClick}>Show/hide new poem form</button>
      {formShowing ? <NewPoemForm onAddPoem={handleAddPoem} /> : null} */}
    </div>
    <MainFeedContainer 
    questions={questions}
    // onDelete={removePoem}
    />
  </div>
  );
}

export default App;
