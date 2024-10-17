import _ from "lodash";

export const DUMMY_TODOLIST = [
  { id: 1, item: "Doctor appointment at 6pm", readOnly: true, checked: false },
  { id: 2, item: "Post office work at 1pm", readOnly: true, checked: false },
  {
    id: 3,
    item: "Paper work at corporation office at 11am",
    readOnly: true,
    checked: false,
  },
  {
    id: 4,
    item: "Pickup grandma at bus stop.",
    readOnly: true,
    checked: false,
  },
];

export const handleAddItem = (
  setInputAddItem,
  inputAddItem,
  inputAddItemRef
) => {
  if (inputAddItemRef.current.value !== "") {
    setInputAddItem([
      ...inputAddItem,
      {
        id: _.uniqueId("list_"),
        item: inputAddItemRef.current.value,
        readOnly: true,
        checked: false,
      },
    ]);
    inputAddItemRef.current.value = "";
  }
};

export const editHandler = (itemId, setInputAddItem, inputAddItem) => {
  let copyInputListItems = [...inputAddItem];
  copyInputListItems.forEach((item) =>
    item.id === itemId ? (item.readOnly = false) : (item.readOnly = true)
  );
  setInputAddItem([...copyInputListItems]);
};
export const handleCheckbox = (
  event,
  listID,
  setInputAddItem,
  inputAddItem
) => {
  let copyInputListItems = [...inputAddItem];
  copyInputListItems.forEach((item) => {
    if (item.id === listID) {
      item.checked = event.target.checked;
    }
  });
  setInputAddItem([...copyInputListItems]);
};

export const onSaveHandler = (
  itemId,
  setInputAddItem,
  inputAddItem,
  listValueRef
) => {
  let copyInputListItems = [...inputAddItem];
  copyInputListItems.forEach((list) => {
    if (list.id === itemId) {
      list.item = listValueRef.current.value;
      list.readOnly = true;
    }
  });
  setInputAddItem([...copyInputListItems]);
};

export const deleteHandler = (itemID, setInputAddItem, inputAddItem) => {
  let copyInputListItems = [...inputAddItem];
  copyInputListItems = copyInputListItems.filter((item) => item.id !== itemID);
  setInputAddItem([...copyInputListItems]);
};

export const onFilterHandler = (
  listStatus,
  inputAddItem,
  setFilteredList,
  setActiveBtn
) => {
  if (listStatus === "Active") {
    let copyInputListItems = [...inputAddItem];
    copyInputListItems = copyInputListItems.filter(
      (item) => item.checked === false
    );
    setFilteredList([...copyInputListItems]);
    setActiveBtn("Active");
  } else if (listStatus === "Completed") {
    let copyInputListItems = [...inputAddItem];
    copyInputListItems = copyInputListItems.filter(
      (item) => item.checked === true
    );
    setFilteredList([...copyInputListItems]);
    setActiveBtn("Completed");
  } else {
    setFilteredList([...inputAddItem]);
    setActiveBtn("All");
  }
};
