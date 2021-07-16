import React, { useState } from "react";
import { FaList, FaRegHeart, FaMoon, FaSun, FaLightbulb } from "react-icons/fa";
import { FiHome ,FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";



export const SideNav = () => {
  const [theme, setTheme] = useState("dark");
  console.log(theme);
  const toggleTheme = () => {
    switch (theme) {
      case "dark":
        setTheme("light");
        break;
      case "light":
        setTheme("solar");
        break;
      case "solar":
        setTheme("dark");
        break;

      default:
        break;
    }
  };
  return (
    <div>
      <nav className={`${theme}`}>
        <ul>
        <li>
            <a href="#" className="nav-item" id="firstItem">
             
              <FiArrowLeftCircle className="closed"/>
              <FiArrowRightCircle className="opened"/>
            </a>
          </li>
          <li>
            <a href="#" className="nav-item">
              <FiHome />
              <span className="nav-text">Home</span>
            </a>
          </li>
          <li>
            <a href="#" className="nav-item">
              <FaList />
              <span className="nav-text">List</span>
            </a>
          </li>
          <li>
            <a href="#" className="nav-item">
              <FaRegHeart />
              <span className="nav-text">Favorite</span>
            </a>
          </li>
          <li>
            <a href="#" className="nav-item">
              <RiPencilLine />
              <span className="nav-text">SetUp</span>
            </a>
          </li>
          <li>
            <a href="#" className="nav-item" onClick={toggleTheme}>
              {theme === "dark" && <FaMoon />}
              {theme === "solar" && <FaSun />}
              {theme === "light" && <FaLightbulb />}
              <span className="nav-text">Theme</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
