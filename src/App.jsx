import classes from "./App.module.css";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className={classes.main_container}>
      <header>
        <nav>
          <ul>
            <li>React ToDo List App</li>
          </ul>
        </nav>
      </header>
      <ToDoList />
    </div>
  );
}

export default App;
