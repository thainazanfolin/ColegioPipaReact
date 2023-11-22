import React from 'react'
import styles from "./NavBar.module.css";

import { NavLink } from "react-router-dom";

const NavBar = () => {
  return <nav>
        <NavLink to="/">
            Colégio Pipa | Conteúdos
        </NavLink>
        <ul>
            <li>
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/sobre">
                    Sobre Nós
                </NavLink>
            </li>
        </ul>
    </nav>
  
}

export default NavBar