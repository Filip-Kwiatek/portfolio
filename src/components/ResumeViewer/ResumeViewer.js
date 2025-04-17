import React, { useEffect } from "react";
import classes from "./ResumeViewer.module.css";

const ResumeViewer = () => {
  useEffect(() => {
    // Save the original styles
    const originalHeight = document.body.style.height;

    // Set the new style for this route (increase total height)
    document.body.style.height = "1000px";

    // Clean up on unmount to restore the original styles
    return () => {
      document.body.style.height = originalHeight;
    };
  }, []);

  return (
    <div className={classes.resume}>
      <iframe
        src={process.env.PUBLIC_URL + "/resume.pdf"}
        style={{ border: "none", width: "100%", height: "100%" }}
        title="Resume"
      ></iframe>
    </div>
  );
};

export default ResumeViewer;
