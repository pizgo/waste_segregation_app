import React from 'react'
import recykling from "../imgs/recykling.jpg";

const Home = () => {

    return (
        <div className="container">
            <div className="container">
                <section className="home">
                    <div className="home__container">
                        <p className="home__hello">
                            Witaj w miejscu, w którym posegregujesz swoje śmieci.<br/>
                            Kliknij na zdjęcie, żeby przenieść się dalej!
                        </p>
                        <a href="/SearchForm">
                            <img src={recykling} alt="kliknij, żeby przejść dalej" className="home__img"/>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home;

