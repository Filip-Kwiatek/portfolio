import React, { useState } from "react";
import classes from "./Opinions.module.css";

const Opinions = () => {
  const [hoverTriggered, setHoverTriggered] = useState(false);

  const handleMouseEnter = () => {
    if (!hoverTriggered) {
      setHoverTriggered(true);
    }
  };

  return (
    <div
      className={`${classes.wrapper} ${hoverTriggered ? classes.triggered : ""}`}
      onMouseEnter={handleMouseEnter}
    >
      <div className={classes.container}>
        <h1>Opinions About Me</h1>
      </div>
      <div className={classes.grid}>
        <div className={classes.squareContainer}>
          <div className={classes.square}>
            <p>
              <img
                className={classes.quote}
                src="https://img.icons8.com/?size=100&id=93323&format=png&color=FFFFFF"
                alt="quotation-mark"
              />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              consectetur ligula in volutpat fringilla. Morbi sollicitudin
              consequat leo quis feugiat. Integer sed venenatis magna. Sed felis
              nunc, vulputate eget tincidunt eu, porttitor efficitur nulla.
              Fusce egestas urna ac elit efficitur, nec pellentesque diam
              vulputate
              <img
                className={classes.quote}
                src="https://img.icons8.com/?size=100&id=m5rn4PuJNgOn&format=png&color=FFFFFF"
                alt="quotation-mark"
              />
            </p>
            <div className={classes.personContainer}>
              <span>
                <img
                  src="https://cdn-icons-png.freepik.com/256/7575/7575090.png?semt=ais_hybrid"
                  alt="person-photo"
                />
              </span>
              <ul className={classes.aboutPersonContainer}>
                <li>Name</li>
                <li>Title of Person</li>
              </ul>
            </div>
          </div>
          <div className={classes.square}>
            <p>
              <img
                className={classes.quote}
                src="https://img.icons8.com/?size=100&id=93323&format=png&color=FFFFFF"
                alt="quotation-mark"
              />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              consectetur ligula in volutpat fringilla. Morbi sollicitudin
              consequat leo quis feugiat. Integer sed venenatis magna. Sed felis
              nunc, vulputate eget tincidunt eu, porttitor efficitur nulla.
              Fusce egestas urna ac elit efficitur, nec pellentesque diam
              vulputate
              <img
                className={classes.quote}
                src="https://img.icons8.com/?size=100&id=m5rn4PuJNgOn&format=png&color=FFFFFF"
                alt="quotation-mark"
              />
            </p>
            <div className={classes.personContainer}>
              <span>
                <img
                  src="https://cdn-icons-png.freepik.com/256/7575/7575090.png?semt=ais_hybrid"
                  alt="person-photo"
                />
              </span>
              <ul className={classes.aboutPersonContainer}>
                <li>Name</li>
                <li>Title of Person</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opinions;