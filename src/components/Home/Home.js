import React from 'react'
import recykling from "../../assets/recykling.jpg";
import {NavLink} from "react-router-dom";

export const Home = () => {

    return (
        <div className="container">
                <section className="home">
                    <div className="home__container">
                        <div className="home__text1 text__header">
                            Witaj na stronie, która pomoże ci prawidłowo segregować śmieci.
                        </div>
                        <div className="home__text2">
                            Wybierz, co chcesz zrobić:
                        </div>
                        <div className='home__choice-container'>
                            <NavLink  to="/SearchForm">
                                <div className='home__choice-box'>
                                    <p className='home__choice-text text__regular'>
                                        Chcę dowiedzieć się, do jakiego kontenera wyrzucić odpadki
                                    </p>
                                </div>
                            </NavLink>
                            <NavLink to="/AddTrash">
                                <div className='home__choice-box'>
                                    <p className='home__choice-text text__regular'>
                                        Mam pomysł, jak uzupełnić waszą bazę danych
                                    </p>
                                </div>
                            </NavLink>
                            <NavLink  to="/PszokMap">
                                <div className='home__choice-box'>
                                    <p className='home__choice-text text__regular'>
                                    Chcę zobaczyć mapę PSZOK–ów
                                    </p>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </section>
        </div>
    )
}


