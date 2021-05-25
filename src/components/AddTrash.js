import React, { useState, useEffect } from 'react'
import getMockData from "./MockData";
import {addNewGarbage} from "./MockData"

import paper from '../imgs/paper.jpg';
import bio from '../imgs/bio.jpg';
import glass from '../imgs/glass.jpg';
import mixed from '../imgs/mixed.jpg';
import pet from '../imgs/pet.jpg';

const defaultGarbage = {
    title: "",
    binID: ""
}

const AddTrash = () => {


    const [garbageTitle, setGarbageTitle] = useState('');
    const [binID, setBinID] = useState();
    const [error, setError] = useState();


    //ustawienie stanu na input użytkownika z formularza
    const handleChange = e => {
        let newGarbageTitle = e.target.value;
        setGarbageTitle(newGarbageTitle);
        console.log(newGarbageTitle);
    }

    //pobieranie kosza
    const handleClick = (id) => {
        setBinID(id)
        console.log({id})
    }
    //wysyłanie

    const handleSubmit = e => {
        e.preventDefault()
        //walidacja
        if(garbageTitle.length < 3) {
            setError("Nazwa musi mieć minimum 3 litery.");
            return;
        }

        let newGarbage = {
                title: garbageTitle,
                binID: binID
            };

        console.log("new garbage will be: ")
        console.log(newGarbage)

        addNewGarbage(newGarbage)

        setError();
    }



    return (
        <section className="addTrash">
                <div className="addTrash__container">
                <p className="addTrash__hello">Jeśli chcesz uzupełnić naszą bazę, wpisz w poniżej rodzaj
                śmiecia. Następnie wybierz, do którego pojemnika należy go wyrzucić i kliknij przycisk.
                Zapoznamy się z Twoją sugestią i uzupełnimy bazę naszych śmieci!</p>

                <input type="text" className="addTrash__form" placeholder="Tu wpisz swoją sugestię" onChange={handleChange} />
                <div className="addTrash__bins">
                    <img src={paper} alt="paper" className="addTrash__bins-img" onClick={event => handleClick(1)}/>
                    <img src={bio} alt="bio" className="addTrash__bins-img"onClick={event =>handleClick(2)}/>
                    <img src={glass} alt="glass" className="addTrash__bins-img"onClick={event =>handleClick(3)}/>
                    <img src={mixed} alt="mixed" className="addTrash__bins-img"onClick={event =>handleClick(4)}/>
                    <img src={pet} alt="pet" className="addTrash__bins-img"onClick={event =>handleClick(5)}/>
                </div>

                <button className="addTrash__button" onClick={handleSubmit}>Wyślij!</button>
                    {/*{!error && <p>Udało się! Twoja propozycja została do nas przekazana</p>}*/}
                    <p className="addTrash__error">{error}</p>
            </div>
        </section>
    )
}

export default AddTrash;

