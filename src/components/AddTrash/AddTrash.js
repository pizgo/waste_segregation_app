import React, { useState, useEffect } from 'react';
import {db} from "../resources/Firebase.js";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAppleAlt} from '@fortawesome/free-solid-svg-icons'
import {faScroll} from '@fortawesome/free-solid-svg-icons'
import {faWineBottle} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {GiOpenedFoodCan} from 'react-icons/gi';


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
                    <p className="addTrash__text text__header">
                        Jeśli chcesz uzupełnić naszą bazę, wpisz w poniżej nazwę odpadu, wybierz, do którego pojemnika należy go wyrzucić i kliknij "Wyślij".
                        Zapoznamy się z Twoją sugestią.
                    </p>
                    <input type="text" className="addTrash__form" placeholder="Tu wpisz swoją sugestię" onChange={handleChange} />
                    <div className="addTrash__bins">
                        <div className={`bin ${clickedID === 1 && "bin__clicked"}`} onClick={event => handleClick(1)}>
                            <FontAwesomeIcon icon={faScroll} alt="paper" id='paper' className='addTrash__bins-img icon paper'/>
                            <p className='addTrash__bins-text desc paper'>Papier</p>
                        </div>
                        <div className={`bin bio ${clickedID === 2 && "bin__clicked"} `} onClick={event =>handleClick(2)}>
                            <FontAwesomeIcon icon={faAppleAlt} alt="bio" id='bio' className='addTrash__bins-img icon bio'/>
                            <p className='addTrash__bins-text desc bio'>Odpady biodegradowalne</p>
                        </div>
                        <div className={`bin ${clickedID === 3 && "bin__clicked"} `} onClick={event =>handleClick(3)}>
                            <FontAwesomeIcon icon={faWineBottle} alt="glass" id='glass' className='addTrash__bins-img icon glass'/>
                            <p className='addTrash__bins-text desc glass'>Szkło</p>
                        </div>
                        <div className={`bin ${clickedID === 4 && 'bin__clicked'} `} onClick={event =>handleClick( 4)}>
                            <FontAwesomeIcon icon={faTrash} alt="mixed" id='mixed' className='addTrash__bins-img icon mixed'/>
                            <p className='addTrash__bins-text desc mixed'>Odpady zmieszane</p>
                        </div>
                        <div className={`bin ${clickedID === 5 && "bin__clicked"} `} onClick={event =>handleClick( 5)}>
                            <GiOpenedFoodCan alt="pet" id='pet' className='addTrash__bins-img icon pet'/>
                            <p className='addTrash__bins-text desc pet'>Metale i tworzywa sztuczne</p>
                        </div>
                    </div>

                    <button className="addTrash__button" onClick={handleSubmit}>Wyślij</button>
                        <p className="addTrash__error">{error}</p>
                        <p className="addTrash__success">{success}</p>

                </div>
        </section>
    )
}



