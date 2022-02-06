import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


export const CollectionMap = () => {

    var listMarker = [
        {
            'location': [52.31931647963682, 21.01204980722072],
            'name': 'PSZOK Punkt Selektywnej Zbiórki Odpadow',
            'website': 'http://www.partner-apelski.pl/pszok.php',
            'hours': {
                'monday': "14:00 - 20:00",
                'tuesday': "14:00 - 20:00",
                'wednesday': "14:00 - 20:00",
                'thursday': "14:00 - 20:00",
                'friday': "14:00 - 20:00",
                'saturday': "14:00 - 20:00",
                'sunday': "closed",
            }
        },
        {
            'location': [52.33836591982187, 21.122147641469358],
            'name': 'Punkt Selektywnej Zbiórki Odpadów Gminy Marki PSZOK',
            'website': 'http://czyste.marki.pl/18-pszok',
            'hours': {
                'monday': "11:00 - 19:00",
                'tuesday': "11:00 - 19:00",
                'wednesday': "11:00 - 19:00",
                'thursday': "11:00 - 19:00",
                'friday': "11:00 - 19:00",
                'saturday': "11:00 - 19:00",
                'sunday': "closed",
            }
        },
    ]

    return(
        <MapContainer style={{height: '400px', width:'60%' }} center={[51.505, -0.09]} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {listMarker.map((item, index) => (
                <Marker position={item.location}>
                    <Popup>
                        <div>
                            {item.name} <br />
                            {item.website} <br/>
                            Godziny otwarcia: <br/>
                            <ul>
                                <li>Poniedziałek: {item.hours.monday}</li>
                                <li>Wtorek: {item.hours.tuesday}</li>
                                <li>Środa: {item.hours.wednesday}</li>
                                <li>Czwartek: {item.hours.thursday}</li>
                                <li>Piątek: {item.hours.friday}</li>
                                <li>Sobota: {item.hours.saturday}</li>
                                <li>Niedziela: {item.hours.sunday}</li>
                            </ul>
                        </div>
                    </Popup>
                </Marker>

                )
            )}
        </MapContainer>
    )
}





