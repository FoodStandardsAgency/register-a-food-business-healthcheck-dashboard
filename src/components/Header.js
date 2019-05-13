import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <ul className="header">
    <li className="listItem">
      <Link to="/">Home</Link>
    </li>
    <li className="listItem">
      <Link to="/test-status">Test Status</Link>
    </li>
    <li className="listItem">
      <Link to="/staging-status">Staging Status</Link>
    </li>
    <li className="listItem">
      <Link to="/prod-status">Prod Status</Link>
    </li>
    <li className="listItem">
      <Link
        style={{ color: "white", textDecoration: "none" }}
        to="/registration-stats"
      >
        Registration Stats
      </Link>
    </li>
  </ul>
);

export default Header;
