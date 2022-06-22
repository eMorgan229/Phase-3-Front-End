import MainFeedContainer from './MainFeedContainer';
import NewQuestionForm from './NewQuestionForm';
import SearchUser from './SearchUser';
import TitleBar from './TitleBar';

function App() {

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
    // poems={poems}
    // onDelete={removePoem}
    />
  </div>
  );
}

export default App;
