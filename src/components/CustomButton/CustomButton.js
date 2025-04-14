import React from "react";
import classes from "./CustomButton.module.css";

const CustomButton = ({ onClick, children, src, alt }) => {
  return (
    <>
      <div className={classes.button} onClick={onClick}>
        <button className={classes.border}>
          {children}
          <img src={src} alt={alt}></img>
        </button>
      </div>
    </>
  );
};

export default CustomButton;
