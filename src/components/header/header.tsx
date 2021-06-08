import React from 'react'
import "../header/header.css"
import {Link} from "react-router-dom";


function Header() {
    return (
      <header className="header">
          <div className="nav-bar">
          <ul className="nav-bar-list">
            <li className="nav-bar-item">
              <Link to="/About">About</Link>
            </li>
            <li className="nav-bar-item">
              <Link to="/Films">Films</Link>
            </li>
            <li className="nav-bar-item">
              <Link to="/Favourite">Favourite</Link>
            </li>
            <li className="nav-bar-item">
              <Link to="/Contacts">Contacts</Link>
            </li>
          </ul>
        </div>
      </header>
   
    )
}

export default Header
