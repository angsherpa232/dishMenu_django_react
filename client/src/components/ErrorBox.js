import React from "react";

const ErrorBox = () => {
  return (
    <div className="errorContainer">
      <p>
        Oops! No dish found with given name,
        <br />
        <span>please check if there is a typo in your search</span>
        <br />
        <span>or try again with other dish name.</span>
      </p>
    </div>
  );
};

export default ErrorBox;
