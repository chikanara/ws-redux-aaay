import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList/TaskList';
import AddTask from './components/AddTask/AddTask';

function App() {
  return (
    <div className="app">
      <h1>Add Task</h1>
      <AddTask/>
     <TaskList/>
    </div>
  );
}

export default App;
