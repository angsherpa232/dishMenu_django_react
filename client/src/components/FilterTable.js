import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./FilterTable.module.css";

const FilterTable = ({ onClickHandler }) => {
  // State for managing the input field for searching dish
  const [dish, setDish] = useState("");

  const textChangeHandler = textValue => {
    setDish(textValue);
  };

  const searchBtnClick = event => {
    event.preventDefault();
    onClickHandler(dish);
  };

  return (
    <form className={styles.searchContainer}>
      <input
        className={styles.inputField}
        type="text"
        placeholder="Preferred dish"
        value={dish}
        onChange={event => textChangeHandler(event.target.value)}
      />
      <button className={styles.btn} onClick={searchBtnClick}>
        Search
      </button>
    </form>
  );
};

FilterTable.propTypes = {
  onClickHandler: PropTypes.func.isRequired
};

export default FilterTable;
