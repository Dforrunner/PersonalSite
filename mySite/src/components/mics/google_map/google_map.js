import React, {useState, useEffect, useCallback} from 'react';
import {GoogleMap, useJsApiLoader, Marker} from "@react-google-maps/api";
import map_styles from "./map_styles";

export default function MyGoogleMap() {
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY
    });

    const [map, setMap] = useState(null)
    const [marker, setMarket] = useState("http://127.0.0.1:8000/media/map_marker/map_marker.png")
    const [center, setCenter] = useState({
        latitude: 0,
        longitude: 0
    })

    useEffect(() => {
        fetch('/api/google-map/')
            .then(res => res.json())
            .then(
                res => {
                    setCenter({
                        latitude: Number(res[0].latitude),
                        longitude: Number(res[0].longitude)
                    });
                    setMarket(res[0].marker)
                },
                err => {
                    console.log(err)
                }
            );
    }, [])

    const onLoad = useCallback(map => {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = useCallback(map => {
        setMap(null)
    }, [])

    return (
        <div id="GoogleMapWrapper">
            {isLoaded &&
            <GoogleMap
                zoom={6}
                center={{lat: center.latitude, lng: center.longitude}}
                options={{
                    mapTypeControl: false,
                    clickableIcons: false,
                    streetViewControl: false,
                    zoomControl: false,
                    fullscreenControl: false,
                    styles: map_styles
                }}
                mapContainerStyle={{
                    width: '100%',
                    height: '100%'
                }}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                <Marker
                    key={1120}
                    position={{lat: center.latitude, lng: center.longitude}}
                    icon={{
                        url: marker,
                        scaledSize: new window.google.maps.Size(60, 80)
                    }}
                />
            </GoogleMap>
            }
        </div>
    )
}