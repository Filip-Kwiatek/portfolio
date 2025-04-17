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
      className={`${classes.wrapper} ${
        hoverTriggered ? classes.triggered : ""
      }`}
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
              Filip is a resourceful problem solver and quick learner whose
              eagerness to tackle challenges makes him a standout asset in
              fast-paced environments. He delivers quality work under pressure,
              demonstrating remarkable dedication. I would gladly work with him
              again and highly recommend him.
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
                <li>Maciek</li>
                <li>Lead of the Project</li>
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
              At Demant, he excelled as a Software Tester—executing performance,
              exploratory, and functionality tests, contributing to SAFe
              planning sessions, and implementing basic automation tests. His
              technical excellence and agile mindset make him a hardworking,
              driven, and dedicated asset to any team.
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
                <li>Paulina</li>
                <li>Test Manager</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opinions;
