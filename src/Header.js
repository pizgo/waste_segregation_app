import React from 'react';

export const Header = () => {
    return (

        <header className="header">
            <div className="header__container">
                <a href="#" className="logo">Posegreguj swoje śmieci</a>

                <nav>
                    <input type="checkbox" className="menu__btn" id="menu__btn"/>
                        <label htmlFor="menu__btn" className="menu__toggle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>

                        <ul className="header__nav">
                            <li className="nav__element"><a href="#" className="nav__link">Gdzie wyrzucić?</a></li>
                            <li className="nav__element"><a href="#" className="nav__link">Dodaj śmieci</a></li>
                            <li className="nav__element"><a href="#" className="nav__link">Sprawdź się</a></li>
                        </ul>
                </nav>
            </div>
        </header>

    )
}

