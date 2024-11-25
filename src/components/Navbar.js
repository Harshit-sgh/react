import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ display: "flex", gap: "15px", padding: "10px" }}>
      <Link to="/">Home</Link>
      <Link to="/current">Current Weather</Link>
      <Link to="/forecast">Forecast</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Navbar;