import React from "react";
import classes from "./ConfirmButton.module.css";

const ConfirmButton = ({ children, src, alt }) => {
  return (
    <div className={classes.hollow}>
      <button className={classes.border}>
        {children}
        <img src={src} alt={alt} />
      </button>
    </div>
  );
};

export default ConfirmButton;