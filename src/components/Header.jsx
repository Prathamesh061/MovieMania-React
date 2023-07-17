import React from "react";
import "./css/header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <a href="#">MovieMania</a>
      </div>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#" className="nav__link">
              New Releases
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              What's Hot
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
