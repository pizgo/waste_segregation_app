import React, {useEffect, useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {getCollectionsList} from "../resources/DataBase";


export const CollectionMap = () => {

    const [collectionsList, setCollectionsList] = useState([]);

    useEffect(() => {
        getCollectionsList(setCollectionsList);
    }, []);


    return (

        <div className="container">
            <section className="map">
                <div className="map__container">
                    <div className='map__text1 text__header'>
                        Sprawdź, gdzie w Twojej okolicy znajdują się Punkty Selektywnego Zbierania Odpadów Komunalnych.
                    </div>
                    <div className='map__text2'>Kliknij w punkt na mapie, żeby sprawdzić
                        adres i godziny otwarcia punktu.</div>
                    <MapContainer className='map__mapBox' center={[52.229675, 21.012230]} zoom={10}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

                            {collectionsList.map((item, index) => (
                                <Marker position={item.location}>
                                    <Popup className='map__popup-container'>
                                        <ul className='map__popup-list'>
                                            <li className='map__popup-listElement' key={index}>{item.name}</li>
                                            <li className='map__popup-listElement' key={index}>
                                                <span>Adres: </span>
                                                {item.address}</li>
                                            <p className='map__popup-listElement' key={index}>Godziny otwarcia: </p>
                                            <li className='map__popup-listElement' key={index}>
                                                <span>Poniedziałek: </span>
                                                {item.monday}</li>
                                            <li className='map__popup-listElement' key={index}>
                                                <span>Wtorek: </span>
                                                {item.tuesday}</li>
                                            <li className='map__popup-listElement' key={index}>
                                                <span>Środa: </span>
                                                {item.wednesday}</li>
                                            <li className='map__popup-listElement' key={index}>
                                                <span>Czwartek: </span>
                                                {item.thursday}</li>
                                            <li className='map__popup-listElement' key={index}>
                                                <span>Piątek: </span>
                                                {item.friday}</li>
                                            <li className='map__popup-listElement' key={index}>
                                                <span>Sobota: </span>
                                                {item.saturday}</li>
                                            <li className='map__popup-listElement' key={index}>
                                                <span>Niedziela: </span>
                                                {item.sunday}</li>
                                        </ul>
                                    </Popup>
                                </Marker>))}
                    </MapContainer>
                </div>
            </section>
        </div>
    )
}



