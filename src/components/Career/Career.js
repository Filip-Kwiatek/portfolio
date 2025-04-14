import React, { useState, useEffect } from "react";
import classes from "./Career.module.css";

const Career = React.forwardRef((props, ref) => {
  // fillHeight: the current height (in pixels) of the blue fill
  const [fillHeight, setFillHeight] = useState(0);
  // isVisible: controls whether the blue fill is rendered (only for scrollY >= startScroll)
  const [isVisible, setIsVisible] = useState(false);
  // state to trigger the one-time hover animation effect
  const [hoverTriggered, setHoverTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const startScroll = 860; // we start the effect at this scroll position
      const endScroll = 1670; // base effect reaches full height at 1670px
      const totalLineHeight = 610; // overall vertical line height (must match CSS)
      const baseHeight = 0; // start from 0 to avoid a sudden jump
      const scrollY = window.scrollY;

      if (scrollY < startScroll) {
        setIsVisible(false);
        setFillHeight(0);
        return;
      } else {
        setIsVisible(true);
      }

      let newHeight = 0;
      if (scrollY <= endScroll) {
        let progress = (scrollY - startScroll) / (endScroll - startScroll);
        progress = Math.max(0, Math.min(progress, 1));

        // Piecewise easing:
        // For the first 20% of progress, use quadratic easing (slow start),
        // then use a faster, power-based easing with exponent 0.6.
        let adjustedProgress;
        const threshold = 0.2; // slow start for the first 20% of scroll progress
        if (progress < threshold) {
          adjustedProgress = Math.pow(progress, 2);
        } else {
          adjustedProgress =
            Math.pow((progress - threshold) / (1 - threshold), 0.6) *
              (1 - Math.pow(threshold, 2)) +
            Math.pow(threshold, 2);
        }
        newHeight =
          baseHeight + adjustedProgress * (totalLineHeight - baseHeight);
      } else {
        // Beyond endScroll, add extra fill gradually.
        const extraScroll = scrollY - endScroll;
        newHeight = totalLineHeight + extraScroll * 0.3;
      }

      setFillHeight(newHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run immediately (if the page is already scrolled)
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On first hover, mark that we've triggered the animation.
  const handleMouseEnter = () => {
    if (!hoverTriggered) {
      setHoverTriggered(true);
    }
  };

  return (
    <div
      className={`${classes.container} ${
        hoverTriggered ? classes.triggered : ""
      }`}
      ref={ref}
      onMouseEnter={handleMouseEnter}
    >
      <h1>Career History</h1>
      <section>
        <span className={classes.line}>
          {isVisible && (
            <div
              className={classes.indicator}
              style={{ height: fillHeight + "px" }}
            />
          )}
          <div
            className={`${classes.circle} ${
              isVisible ? classes.circleVisible : ""
            }`}
          />
          <div
            className={`${classes.second} ${
              isVisible ? classes.circleVisible : ""
            }`}
          />
        </span>

        <div className={classes.dateContainer}>
          <ul className={classes.date}>
            <li>July 2024 - Present</li>
          </ul>
          <ul className={classes.date}>
            <li>Sep 2022 - July 2024</li>
          </ul>
        </div>

        <div className={classes.listContainer}>
          <ul className={classes.paragraphs}>
            <li>Manual Tester</li>
            <li>Test Specialist</li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sit amet turpis non nibh varius ornare. Donec elementum diam ac
              accumsan aliquet. Quisque condimentum augue vel ex fermentum, nec
              semper massa mattis. Pellentesque dictum pellentesque risus ac
              efficitur.
            </li>
          </ul>
          <ul className={classes.paragraphs}>
            <li>Manual Tester</li>
            <li>Test Specialist</li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sit amet turpis non nibh varius ornare. Donec elementum diam ac
              accumsan aliquet. Quisque condimentum augue vel ex fermentum, nec
              semper massa mattis. Pellentesque dictum pellentesque risus ac
              efficitur.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
});

export default Career;
