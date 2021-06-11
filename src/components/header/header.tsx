import React from 'react'
import "../header/header.css"
import {Link} from "react-router-dom";
import { FETCH_FILMS } from '../../store/actions/actions';
import { useDispatch } from 'react-redux';


function Header() {

  const dispatch = useDispatch()
    
  const handleClick = () => {
      dispatch({
          type: FETCH_FILMS 
        })
  }
    return (
      <header className="header">
          <div className="nav-bar">
          <ul className="nav-bar-list">
            <li className="nav-bar-item">
              <Link to="/About">About</Link>
            </li>
            <li className="nav-bar-item" onClick={handleClick}>
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
