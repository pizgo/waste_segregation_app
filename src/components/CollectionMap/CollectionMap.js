import React, {useEffect, useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {getCollectionsList} from "../resources/DataBase";


export const CollectionMap = () => {

    const [collectionsList, setCollectionsList] = useState([]);

    useEffect(() => {
        getCollectionsList(setCollectionsList);
    }, []);

    console.log(collectionsList)
    console.log(collectionsList.name)
    console.log(collectionsList.address)



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
                        {/*{listMarker.map((item, index) => (*/}
                        {/*    <Marker position={collectionsList.location}>*/}
                        {/*        <Popup className='map__popup-container'>*/}
                        {/*            <ul className='map__popup-list'>*/}
                        {/*                <li className='map__popup-listElement'>{collectionsList.name}</li>*/}
                        {/*                <li className='map__popup-listElement'>{collectionsList.website}</li>*/}
                        {/*                <li className='map__popup-listElement'>Godziny otwarcia: </li>*/}
                        {/*                <li className='map__popup-listElement'>Poniedziałek: {collectionsList.hours.monday}</li>*/}
                        {/*                <li className='map__popup-listElement'>Wtorek: {collectionsList.hours.tuesday}</li>*/}
                        {/*                <li className='map__popup-listElement'>Środa: {collectionsList.hours.wednesday}</li>*/}
                        {/*                <li className='map__popup-listElement'>Czwartek: {collectionsList.hours.thursday}</li>*/}
                        {/*                <li className='map__popup-listElement'>Piątek: {collectionsList.hours.friday}</li>*/}
                        {/*                <li className='map__popup-listElement'>Sobota: {collectionsList.hours.saturday}</li>*/}
                        {/*                <li className='map__popup-listElement'>Niedziela: {collectionsList.hours.sunday}</li>*/}
                        {/*            </ul>*/}
                        {/*        </Popup>*/}
                        {/*    </Marker>))}*/}
                </MapContainer>
                </div>
            </section>
        </div>
    )
}


// var listMarker = [
//     {
//         'location': [52.31931647963682, 21.01204980722072],
//
//         'name': 'PSZOK Punkt Selektywnej Zbiórki Odpadow',
//         'website': 'http://www.partner-apelski.pl/pszok.php',
//         'hours': {
//             'monday': "14:00 - 20:00",
//             'tuesday': "14:00 - 20:00",
//             'wednesday': "14:00 - 20:00",
//             'thursday': "14:00 - 20:00",
//             'friday': "14:00 - 20:00",
//             'saturday': "14:00 - 20:00",
//             'sunday': "closed",
//         }
//     },
//     {
//         'location': [52.33836591982187, 21.122147641469358],
//         'name': 'Punkt Selektywnej Zbiórki Odpadów Gminy Marki PSZOK',
//         'website': 'http://czyste.marki.pl/18-pszok',
//         'hours': {
//             'monday': "11:00 - 19:00",
//             'tuesday': "11:00 - 19:00",
//             'wednesday': "11:00 - 19:00",
//             'thursday': "11:00 - 19:00",
//             'friday': "11:00 - 19:00",
//             'saturday': "11:00 - 19:00",
//             'sunday': "closed",
//         }
//     },
// ]




