import React from 'react'
import recykling from "../../assets/recykling.jpg";

export const Home = () => {

    return (
        <div className="container">
            <div className="container">
                <section className="home">
                    <div className="home__container">
                        <div className="home__hello">
                            Witaj w miejscu, w którym posegregujesz swoje śmieci.
                            Kliknij na zdjęcie, żeby przenieść się dalej
                        </div>
                        <a href="/SearchForm">
                            <img src={recykling} alt="kliknij, żeby przejść dalej" className="home__img"/>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    )
}


