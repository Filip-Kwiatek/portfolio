import React, { useState, useEffect, useRef } from "react";
import classes from "./MainPage.module.css";
import Name from "../Name/Name";
import History from "../History/History";
import Career from "../Career/Career";
import Tools from "../Tools/Tools";
import { Link } from "react-router-dom";
import Opinions from "../Opinions/Opinions";
import Contact from "../Contact/Contact";

const MainPage = () => {
  const homeRef = useRef(null);
  const historyRef = useRef(null);
  const careerRef = useRef(null);
  const toolsRef = useRef(null);
  const contactRef = useRef(null);

  const images = [
    "https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256",
    "https://cdn.brandfetch.io/cypress.io/fallback/lettermark/theme/dark/h/256/w/256/icon?c=1bfwsmEH20zzEfSNTed",
    "https://piecioshka.pl/assets/images/posts/javascript/logo-javascript.svg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDPc8NYixJENPhgC5MC0PZ4ncfsIxFnijPNw&s",
  ];
  const namesOfTechnologies = ["React", "Cypress", "JavaScript", "ISTQB"];
  const paths = [
    "https://react.dev/",
    "https://www.cypress.io/",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    "https://sjsi.org/",
  ];

  const [showNavbar, setShowNavbar] = useState(false);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollDelta = Math.abs(scrollTop - lastScrollTop.current);
      const THRESHOLD = 5;

      if (scrollDelta > THRESHOLD) {
        if (scrollTop < lastScrollTop.current) {
          setShowNavbar(true);
        } else {
          setShowNavbar(false);
        }
      }
      lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Name
        ref={homeRef}
        onScrollToContact={() => handleNavClick(contactRef, 170)}
      />
      <div className={classes.background}>
        <History ref={historyRef} />
        <Career ref={careerRef} />
        <Tools
          ref={toolsRef}
          images={images}
          speed={5}
          namesOfTechnologies={namesOfTechnologies}
          hrefs={paths}
        />
        <Opinions />
        <Contact ref={contactRef} />
        <div
          className={`${classes.navbar} ${
            showNavbar ? classes.show : classes.hide
          }`}
        >
          <Link onClick={() => handleNavClick(homeRef)}>Home</Link>
          <Link onClick={() => handleNavClick(historyRef)}>About</Link>
          <Link onClick={() => handleNavClick(careerRef)}>Career</Link>
          <Link onClick={() => handleNavClick(toolsRef)}>Tools</Link>
        </div>
      </div>
    </>
  );
};

export default MainPage;
