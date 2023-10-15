import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { nav } from "../../data/Data";
const Header = () => {
  const [navlist, setNavlist] = useState(false);
  return (
    <header>
      <div className="container flex">
        <div className="logo">
          <h2>
            <i className="fa fa-home"></i> <span>Your </span>
            Home
          </h2>
        </div>
        <div>
          <ul className={navlist ? "small" : "flex"}>
            {nav.map((list, index) => (
              <li key={index}>
                <Link to={list.path}>{list.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="button flex">
          <h4>
            <span>2</span>My List
          </h4>
          <button className="btn1">
            <i className="fa fa-sign-out"></i>
            Sign In
          </button>
        </div>
        <div className="toogle">
          <button onClick={() => setNavlist(!navlist)}>
            {navlist ? (
              <i className="fa fa-times"></i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
