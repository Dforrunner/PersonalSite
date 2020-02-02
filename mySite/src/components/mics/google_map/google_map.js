import React, {useState} from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from "react-google-maps";
import map_styles from "./map_styles";

//Using Google maps api to add a customized map with my location marked
function Map(props) {
     return (
        <GoogleMap
            defaultZoom={6}
            defaultCenter={{lat:  props.latitude, lng: props.longitude}}
            options={{
                mapTypeControl: false,
                clickableIcons: false,
                streetViewControl: false,
                zoomControl: false,
                fullscreenControl: false,
                styles: map_styles
            }}
        >
            <Marker
                key={1120}
                position={{lat:  props.latitude, lng: props.longitude}}
                icon={{
                    url: props.marker,
                    scaledSize: new window.google.maps.Size(60, 80)
                }}
            />
        </GoogleMap>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default class MyGoogleMap extends React.Component{
     constructor(pros) {
        super(pros);
        this.state = {
            latitude: 40.532293,
            longitude: -74.456657,
            marker: "http://127.0.0.1:8000/media/map_marker/map_marker.png"
        }
    }

    componentDidMount() {
       fetch("/api/google-map/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        latitude: Number(result[0].latitude),
                        longitude: Number(result[0].longitude),
                        marker: result[0].marker
                    })
                },
                (error) => {
                    console.log(error)
                }
            );
    }
    render() {
        return(
            <div id="GoogleMapWrapper">
                <WrappedMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
                        process.env.REACT_APP_GOOGLE_KEY
                    }`}
                    loadingElement={<div style={{width: "100%"}} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    latitude={this.state.latitude}
                    longitude={this.state.longitude}
                    marker={this.state.marker}
                />
            </div>
        )
    }
}