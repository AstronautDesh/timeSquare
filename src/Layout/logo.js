import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Logo.css';

const Logo = () => {
  return (
    <Link to="/search" className="logo-link">
      <h1 className="logo">Time Square</h1>
    </Link>
  );
};

export default Logo;
