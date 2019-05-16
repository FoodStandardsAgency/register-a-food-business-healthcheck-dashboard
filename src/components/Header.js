import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <ul className="header">
    <li className="listItem">
      <Link to="/">Home</Link>
    </li>
    <li className="listItem">
      <Link to="/status">Status</Link>
    </li>
    <li className="listItem">
      <Link to="/registration-stats">Registration Stats</Link>
    </li>
  </ul>
);

export default Header;
