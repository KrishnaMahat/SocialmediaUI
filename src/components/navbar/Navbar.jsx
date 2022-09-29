import React,{ useState }  from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faPowerOff,
  faGear,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'



const Navbar = () => {
  return (
    <div className="nav">
        <NavLink exact="true" activeclassname="active" to="/"><FontAwesomeIcon icon={faHome} color="var(--facolor)" /></NavLink>
        <NavLink exact="true" activeclassname="active" to="/profile"><FontAwesomeIcon icon={faUser} color="var(--facolor)" /></NavLink>
        <NavLink exact="true" activeclassname="active" to="/profile"><FontAwesomeIcon icon={faGear} color="var(--facolor)" /></NavLink>
        <a><FontAwesomeIcon icon={faPowerOff} color="var(--facolor)" /> </a>
    </div>
  )
}

export default Navbar