import React, { useState, useEffect } from "react";
import classes from "./History.module.css";

const History = React.forwardRef((props, ref) => {
  // State to determine when scroll threshold is passed.
  const [scrollTriggered, setScrollTriggered] = useState(false);

  useEffect(() => {
    const scrollThreshold = 0; // Adjust this value to your desired scrollY trigger

    const handleScroll = () => {
      if (window.scrollY > scrollThreshold && !scrollTriggered) {
        setScrollTriggered(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Call once on mount in case the page is already scrolled down
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollTriggered]);

  return (
    <div
      className={`${classes.wrapper} ${
        scrollTriggered ? classes.triggered : ""
      }`}
    >
      <div className={classes.container} ref={ref}>
        <section className={classes.paragraphs}>
          <h2>My History</h2>
          <p>
            I embarked on my software development journey in June 2021, during
            the height of the global lockdown. Without a mentor or formal
            classroom setting, I embraced the challenges of self-directed
            learning in a time when programming was entirely new to me.
          </p>
          <p>
            Growing up in a rural area with limited resources fueled my
            determination to seek knowledge online and immerse myself fully in
            the world of coding. Today, that initial spark has evolved into
            expertise—particularly in modern frameworks such as React and
            Next.js—allowing me to build sophisticated software independently
            while leveraging my background as a unique strength.
          </p>
          <p id="hidden" className={classes.quote}>
            "Obstacles? I call them features!"
          </p>
        </section>
        <img
          src="https://amaxfireandsecurity.co.uk/wp-content/uploads/2023/12/profile-pic-MD.jpg"
          alt="my-photo"
        />
      </div>
    </div>
  );
});

export default History;
