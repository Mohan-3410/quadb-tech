import TaskInput from "./TaskInput ";
import TaskList from "./TaskList";
import './App.css'
const App = () => {
  return (
    <div className="App">
      <h1>To-Do App</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;
