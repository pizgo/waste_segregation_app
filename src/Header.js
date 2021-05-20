import React from 'react';

export const Header = () => {
    return (

        <header className="header">
            <div className="header__container">
                <div className="logo">Posegreguj swoje śmieci</div>

                <nav>
                    <input type="checkbox" className="menu__btn" id="menu__btn"/>
                        <label htmlFor="menu__btn" className="menu__toggle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>

                        <ul className="header__nav">
                            <li className="nav__element">Gdzie wyrzucić?</li>
                            <li className="nav__element">Dodaj śmieci</li>
                            <li className="nav__element">Sprawdź się</li>
                            {/*<li className="nav__element"><a href="#" className="nav__link">Sprawdź się</a></li>*/}
                        </ul>
                </nav>
            </div>
        </header>

    )
}

