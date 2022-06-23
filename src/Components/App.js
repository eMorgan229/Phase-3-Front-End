import React, {useState, useEffect}from "react";
import MainFeedContainer from './MainFeedContainer';
import NewQuestionForm from './NewQuestionForm';
import SearchUser from './SearchUser';
import TitleBar from './TitleBar';

function App() {
  const [questions, setQuestions] = useState([])
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:9292/questions")
    .then(r => r.json())
    .then((data) => setQuestions(data)
    )
  }, []);
  const userNameQuestions = questions.filter((question) => {
    return question.users.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="app">
      <TitleBar/>
    <div className="sidebar">
      <NewQuestionForm/>
      <SearchUser searchTerm={searchTerm} onSearchChange={setSearchTerm} />
    </div>
    <MainFeedContainer 
    questions={userNameQuestions}
    // onDelete={removePoem}
    />
  </div>
  );
}

export default App;
