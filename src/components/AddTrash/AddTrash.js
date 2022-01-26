import React, { useState, useEffect } from 'react';
import {db} from "../resources/Firebase.js";

import paper from '../../assets/paper.jpg';
import bio from '../../assets/bio.jpg';
import glass from '../../assets/glass.jpg';
import mixed from '../../assets/mixed.jpg';
import pet from '../../assets/pet.jpg';


export const AddTrash = () => {


    const [garbageTitle, setGarbageTitle] = useState('');
    const [binID, setBinID] = useState();
    const [clickedID, setClickedID] = useState();
    const [error, setError] = useState();
    const [success, setSuccess] = useState();



    //adding garbage.title
    const handleChange = e => {
        setGarbageTitle(e.target.value)
        setSuccess();
        setError();
        setClickedID();
        setBinID();
    }

    //adding binID
    const handleClick = (id) => {
        setBinID(id)
        console.log({id})
        setClickedID(id);
    }

    //sending to firebase
    const handleSubmit = e => {
        e.preventDefault()
        //validation
        console.log("bin ID")
        console.log(binID)
        if(garbageTitle.length < 3)  {
            setError("Nazwa musi mieć minimum 3 litery. Spróbuj jeszcze raz");
            return;
        } else if (binID == null ){
            setError("Pamiętaj o zaznaczeniu kosza. Spróbuj jeszcze raz");
            return;
        }

        db.collection("garbage").add({
            title: garbageTitle,
            binID: binID,
        })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
                setSuccess("Udało się! Twoja propozycja została do nas przesłana!")
            })

            .catch((error) => {
                console.error("Error adding document: ",error);
            })

        setError();
    }

    return (
        <section className="addTrash">
                <div className="addTrash__container">
                    <p className="addTrash__hello">Jeśli chcesz uzupełnić naszą bazę, wpisz w poniżej rodzaj
                    śmiecia, wybierz, do którego pojemnika należy go wyrzucić i kliknij "Wyślij".
                    Zapoznamy się z Twoją sugestią i uzupełnimy bazę naszych śmieci.</p>

                    <input type="text" className="addTrash__form" placeholder="Tu wpisz swoją sugestię" onChange={handleChange} />
                    <div className="addTrash__bins">
                        <img src={paper} alt="paper" className={`addTrash__bins-img ${clickedID === 1 && "addTrash__bins-img-clicked"} `} onClick={event => handleClick(1)}/>
                        <img src={bio} alt="bio"     className={`addTrash__bins-img ${clickedID === 2 && "addTrash__bins-img-clicked"} `} onClick={event =>handleClick(2)}/>
                        <img src={glass} alt="glass" className={`addTrash__bins-img ${clickedID === 3 && "addTrash__bins-img-clicked"} `} onClick={event =>handleClick(3)}/>
                        <img src={mixed} alt="mixed" className={`addTrash__bins-img ${clickedID === 4 && "addTrash__bins-img-clicked"} `} onClick={event =>handleClick( 4)}/>
                        <img src={pet} alt="pet"     className={`addTrash__bins-img ${clickedID === 5 && "addTrash__bins-img-clicked"} `} onClick={event =>handleClick(5)}/>
                    </div>

                    <button className="addTrash__button" onClick={handleSubmit}>Wyślij!</button>
                        <p className="addTrash__error">{error}</p>
                        <p className="addTrash__success">{success}</p>
                </div>
        </section>
    )
}



