import React from 'react';
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

  const location = useLocation().pathname;

  return (
    <div className="navbar">
      <div className="navbar-item">
        <Link to="/">All</Link>
        <div className={location === '/' ? 'border' : 'no-border'}></div>
      </div>
      <div className="navbar-item">
        <Link to="/active">Active</Link>
        <div className={location === '/active' ? 'border' : 'no-border'}></div>
      </div>
      <div className="navbar-item">
        <Link to="/completed">Completed</Link>
        <div className={location === '/completed' ? 'border' : 'no-border'}></div>
      </div>
    </div>
  );
}
 
export default Navbar;
