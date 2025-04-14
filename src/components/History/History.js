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
            Curabitur sed odio tempor, bibendum sem eu, consectetur est.
            Vestibulum rhoncus cursus risus a ultrices. Quisque tellus libero,
            finibus a vehicula ac, euismod eleifend dui. Nunc bibendum lacus
            nisl, non imperdiet sem fringilla nec. Proin a tristique sapien. Ut
            vestibulum dolor suscipit odio gravida, in bibendum nisl aliquet.
            Maecenas sollicitudin augue diam, eget interdum lacus maximus vel.
            Phasellus euismod sed eros vitae convallis.
          </p>
          <p>
            Praesent eu luctus arcu. Donec pellentesque, leo eu sodales
            pharetra, mi tortor accumsan nulla, malesuada finibus risus justo
            sed turpis. Sed id eros a est rutrum ullamcorper. Proin in pharetra
            diam. Etiam dolor erat, porta a quam non, viverra euismod nisl. Duis
            mi nulla, rhoncus a metus at, pharetra sodales massa. Donec
            scelerisque est ut dolor elementum sollicitudin.
          </p>
          <p id="hidden" className={classes.quote}>
            Morbi a nibh porttitor, varius sapien ac.
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
