import { GrAdd } from "react-icons/gr";
import { useRef, useState } from "react";
import classes from "./ToDoList.module.css";

import ToDoItem from "./ToDoItem";
import { DUMMY_TODOLIST, handleAddItem } from "./services";

const ToDoList = () => {
  const inputAddItemRef = useRef();
  const listValueRef = useRef();
  const [inputAddItem, setInputAddItem] = useState(DUMMY_TODOLIST);

  return (
    <div className={classes.toDo_container}>
      <div className={classes.todo_addItem}>
        <input
          type="text"
          name="addItemInput"
          ref={inputAddItemRef}
          placeholder="Add new toDo item here..."
        />
        <button
          onClick={() =>
            handleAddItem(setInputAddItem, inputAddItem, inputAddItemRef)
          }
        >
          <GrAdd />
        </button>
      </div>
      <ToDoItem
        inputAddItem={inputAddItem}
        setInputAddItem={setInputAddItem}
        listValueRef={listValueRef}
      />
    </div>
  );
};

export default ToDoList;
