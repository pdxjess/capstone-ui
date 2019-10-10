import React from "react";
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div className="container">
      <div className="header-top">
        <ul className="nav-bar">
          <li><Link to="/overview">Overview</Link></li>
          <li><Link to="/objectives">Objectives</Link></li>
          <li><Link to="/research">Research</Link></li>
          <li><Link to="/personas">Personas</Link></li>
          <li><Link to="/userstories">User Stories</Link></li>
          <li><Link to="/userflow">User Flow</Link></li>
          <li><Link to="/wireframe">Wireframing</Link></li>
          <li><Link to="/moodboard">Mood Board</Link></li>
          <li><Link to="/styleguide">Style Guide</Link></li>
          <li><Link to="/prototype">Prototype</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
