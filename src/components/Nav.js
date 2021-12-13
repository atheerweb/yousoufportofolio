import React, { useState } from "react";
//import {motion} from 'farmer-motion'
const Nav = () => {
  const [active, switchNav] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  const navs = ["about", "work"];
  return (
    <nav className="Navbar">
      <div className="desktop__menu">
        {navs.map((nav) => (
          <a
            href={`#${nav}`}
            onClick={() => handleOnClick(nav)}
            className={activeIndex === nav ? "active" : ""}
          >
            {nav}
          </a>
        ))}
      </div>
      <div
        className="Mobile__button"
        onClick={() => {
          switchNav(!active);
        }}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <h1>Yousouf</h1>

      <div className={`Mobile__menu  ${active ? "show" : "hidden"}`}>
        {navs.map((nav) => (
          <a
            href={`#${nav}`}
            onClick={() => {
              switchNav(!active);
            }}
          >
            {nav}
          </a>
        ))}
        <span
          className={`filter ${active ? "showF" : "hiddenF"}`}
          onClick={() => {
            switchNav(!active);
          }}
        ></span>
      </div>
    </nav>
  );
};

export default Nav;
