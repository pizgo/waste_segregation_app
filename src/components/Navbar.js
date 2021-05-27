import React, {useState} from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {


    return (
        <header className="header">
            <div className="header__container">
                <NavLink className="header__logo"to="/">Posegreguj swoje śmieci</NavLink>

                <nav>
                    <input type="checkbox" className="menu__btn" id="menu__btn"/>
                    <label for="menu__btn" className="menu__toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>

                    <div className="header__nav">
                        <NavLink className="nav__element nav__link" to="/SearchForm">Gdzie wyrzucę...</NavLink>
                        <NavLink className="nav__element nav__link" to="/AddTrash">Dodaj śmieci!</NavLink>
                    </div>
                </nav>
            </div>
        </header>
    )
}




