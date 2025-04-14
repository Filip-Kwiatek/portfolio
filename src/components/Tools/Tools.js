import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Tools.module.css";

const Tools = React.forwardRef(
  ({ images, speed = 30, namesOfTechnologies, hrefs }, ref) => {
    const slides = [...images, ...images];
    const techNames = [...namesOfTechnologies, ...namesOfTechnologies];
    const paths = [...hrefs, ...hrefs];

    // One-time hover trigger state.
    const [hoverTriggered, setHoverTriggered] = useState(false);
    const handleMouseEnter = () => {
      if (!hoverTriggered) {
        setHoverTriggered(true);
      }
    };

    // Apply .triggered class when first hover has been triggered.
    const containerClasses = `${classes.container} ${
      hoverTriggered ? classes.triggered : ""
    }`;

    return (
      <div className={containerClasses} onMouseEnter={handleMouseEnter}>
        <h1 className={classes.title} ref={ref}>
          Used Tools:
        </h1>
        <div className={classes.sliderWrapper}>
          <div
            className={classes.sliderTrack}
            style={{ animationDuration: `${speed}s` }}
          >
            {slides.map((src, index) => (
              <div key={index} className={classes.slide}>
                <Link to={paths[index]}>
                  <img
                    src={src}
                    alt={`Slide ${index}`}
                    className={classes.image}
                  />
                  <p className={classes.caption}>{techNames[index]}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

export default Tools;
