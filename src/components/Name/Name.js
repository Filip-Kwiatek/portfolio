import React from "react";
import classes from "./Name.module.css";
import CustomButton from "../CustomButton/CustomButton";

const Name = React.forwardRef((props, ref) => {
  return (
    <div className={classes.container} ref={ref}>
      <span className={classes.name}>Hi, I'm Filip, a Self Taugh</span>
      <span className={classes.name}>Automation Tester</span>
      <span className={classes.name}>
        Specialized in <strong>React</strong> and <strong>Cypress</strong>
      </span>
      <div className={classes.buttons}>
        <span>
          <CustomButton
            onClick={props.onScrollToContact}
            src={
              "https://img.icons8.com/?size=100&id=yWPQb8LmzaLJ&format=png&color=FFFFFF"
            }
            alt={"Send icon"}
          >
            Say Hi
          </CustomButton>
        </span>
        <span>
          <CustomButton
            src={
              "https://img.icons8.com/?size=100&id=20FjgTazh8FG&format=png&color=FFFFFF"
            }
            alt={"Download icon"}
          >
            Resume
          </CustomButton>
        </span>
      </div>
    </div>
  );
});

export default Name;
