import React from 'react'
import {NavLink} from "react-router-dom";
import {BiSearch} from 'react-icons/bi';
import {BiPlus} from 'react-icons/bi';
import {BiMap} from 'react-icons/bi';

export const Home = () => {

    return (
        <div className="container">
                <section className="home">
                    <div className="home__container">
                        <div className="home__text1 text__header">
                            Witaj na stronie, która pomoże ci prawidłowo segregować śmieci.
                        </div>

                        <div className="home__text2 text__header">
                            Wybierz, co chcesz zrobić:
                        </div>
                        <div className='home__choice-container'>
                            <NavLink  to="/SearchForm">
                                <div className='home__choice-box'>
                                    <div className='home__choice-boxContent'>
                                        <BiSearch className='home__choice-icon'/>
                                        <p className='home__choice-text text__regular'>
                                            Chcę dowiedzieć się, do jakiego kontenera wyrzucić moje odpadki.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                            <NavLink to="/AddTrash">
                                <div className='home__choice-box'>
                                    <div className='home__choice-boxContent'>
                                        <BiPlus className='home__choice-icon'/>
                                        <p className='home__choice-text text__regular'>
                                            Mam pomysł, jak uzupełnić waszą bazę danych.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                            <NavLink  to="/PszokMap">
                                <div className='home__choice-box'>
                                    <div className='home__choice-boxContent'>
                                        <BiMap className='home__choice-icon'/>
                                        <p className='home__choice-text text__regular'>
                                        Chcę zobaczyć, gdzie znajduje się najbliższy Punkt Selektywnej Zbiórki Odpadów.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>

                </section>
        </div>
    )
}


