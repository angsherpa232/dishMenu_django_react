import React from "react";
import spinner from "./spinner.gif";
import styles from "./spinner.module.css";

export default () => {
  return (
    <div>
      <img src={spinner} alt="Loading ..." className={styles.spinner} />
    </div>
  );
};
