import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';



export const CollectionMap = () => {

    function Map() {
        return (
            <GoogleMap
                defaultZoom={10}
                defaultCenter={{lat: 52.229675, lng: 21.012230}}/>)};

    const WrappedMap = withScriptjs(withGoogleMap(Map));

    return (
        <div className="container" style={{width: '60vw', height: '100vh'}}>
            <section className='map'>
                <div className='map__container'>
                    <WrappedMap
                    googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `500px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>
            </section>
        </div>
    );


}





