import { useState } from "react";
import { onFilterHandler } from "./services";
import PropTypes from "prop-types";
import classes from "./Footer.module.css";
const Footer = ({ inputAddItem, setFilteredList, filteredList }) => {
  const [activeBtn, setActiveBtn] = useState("All");
  return (
    <footer className={classes.footer}>
      <label>{`${filteredList.length} items left`}</label>
      <button
        className={activeBtn === "All" ? classes.active : ""}
        onClick={() =>
          onFilterHandler("All", inputAddItem, setFilteredList, setActiveBtn)
        }
      >
        All
      </button>
      <button
        className={activeBtn === "Active" ? classes.active : ""}
        onClick={() =>
          onFilterHandler("Active", inputAddItem, setFilteredList, setActiveBtn)
        }
      >
        Active
      </button>
      <button
        className={activeBtn === "Completed" ? classes.active : ""}
        onClick={() =>
          onFilterHandler(
            "Completed",
            inputAddItem,
            setFilteredList,
            setActiveBtn
          )
        }
      >
        Completed
      </button>
    </footer>
  );
};

Footer.propTypes = {
  inputAddItem: PropTypes.array,
  setFilteredList: PropTypes.func,
  filteredList: PropTypes.array,
};

export default Footer;
