import { RiDeleteBin5Line } from "react-icons/ri";
import { GrCheckmark } from "react-icons/gr";
import { MdEdit } from "react-icons/md";
import PropTypes from "prop-types";

import classes from "./ToDoItem.module.css";
import {
  editHandler,
  handleCheckbox,
  onSaveHandler,
  deleteHandler,
} from "./services";
import Footer from "./Footer";
import { useEffect, useState } from "react";

const ToDoItem = ({ inputAddItem, setInputAddItem, listValueRef }) => {
  const [filteredList, setFilteredList] = useState(inputAddItem);
  useEffect(() => {
    if (inputAddItem) {
      setFilteredList(inputAddItem);
    }
  }, [inputAddItem]);

  return (
    <div className={classes.todo_list}>
      <ul>
        {filteredList.map((list) => {
          return (
            <li key={list.id}>
              <input
                type="checkbox"
                name="checkboxInput"
                className={classes.checkboxInput}
                checked={list.checked}
                onChange={(event) =>
                  handleCheckbox(event, list.id, setInputAddItem, inputAddItem)
                }
              />
              {list.checked === true ? (
                <input
                  type="text"
                  defaultValue={list.item}
                  readOnly={list.readOnly}
                  name={`${list.id}toDoValue`}
                  id={`${list.id}toDoValue`}
                  className={classes.inputListValue}
                  ref={listValueRef}
                />
              ) : (
                <input
                  type="text"
                  defaultValue={list.item}
                  readOnly={list.readOnly}
                  name={`${list.id}toDoValue`}
                  id={`${list.id}toDoValue`}
                  className={classes.inputListValue}
                  ref={listValueRef}
                />
              )}
              <div className={classes.action_items}>
                {list.checked === false ? (
                  list.readOnly === true ? (
                    <button
                      onClick={() =>
                        editHandler(list.id, setInputAddItem, inputAddItem)
                      }
                    >
                      <MdEdit />
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        onSaveHandler(
                          list.id,
                          setInputAddItem,
                          inputAddItem,
                          listValueRef
                        )
                      }
                    >
                      <GrCheckmark />
                    </button>
                  )
                ) : undefined}
                <button
                  onClick={() =>
                    deleteHandler(list.id, setInputAddItem, inputAddItem)
                  }
                >
                  <RiDeleteBin5Line />
                </button>
              </div>
            </li>
          );
        })}
        <Footer
          inputAddItem={inputAddItem}
          setFilteredList={setFilteredList}
          filteredList={filteredList}
        />
      </ul>
    </div>
  );
};

ToDoItem.propTypes = {
  inputAddItem: PropTypes.array,
  setInputAddItem: PropTypes.func,
  listValueRef: PropTypes.object,
};

export default ToDoItem;
