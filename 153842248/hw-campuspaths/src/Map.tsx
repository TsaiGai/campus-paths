/*
 * Copyright (C) 2022 Kevin Zatloukal and James Wilcox.  All rights reserved.  Permission is
 * hereby granted to students registered for University of Washington
 * CSE 331 for use solely during Autumn Quarter 2022 for purposes of
 * the course.  No other use, copying, distribution, or modification
 * is permitted without prior written consent. Copyrights for
 * third-party components of this work must be honored.  Instructors
 * interested in reusing these course materials should contact the
 * author.
 */

import { LatLngExpression } from "leaflet";
import React, { Component } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapLine from "./MapLine";
import { UW_LATITUDE_CENTER, UW_LONGITUDE_CENTER } from "./Constants";
import {MLine} from "./Interfaces";

// This defines the location of the map. These are the coordinates of the UW Seattle campus
const position: LatLngExpression = [UW_LATITUDE_CENTER, UW_LONGITUDE_CENTER];

// NOTE: This component is a suggestion for you to use, if you would like to. If
// you don't want to use this component, you're free to delete it or replace it
// with your hw-lines Map

interface MapProps {
    // TODO: Define the props of this component.
    mLines: MLine[]
}

interface MapState {}

class Map extends Component<MapProps, MapState> {
    constructor(props: MapProps) {
        super(props);
    }

    render() {
        // code representation of a path
        const mapLines = this.props.mLines.map(({start, end}) =>
            (<MapLine key={start.x + end.y + Math.random()}
                      color={"black"} x1={start.x} y1={start.y} x2={end.x} y2={end.y}/>));
        return (
            <div id="map">
                <MapContainer
                    center={position}
                    zoom={15}
                    scrollWheelZoom={false}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        // TODO: Render map lines here using the MapLine component. E.g.
                        // <MapLine key="key1" color="red" x1={1000} y1={1000} x2={2000} y2={2000}/>
                        // will draw a red line from the point 1000,1000 to 2000,2000 on the
                        // map. Note that key should be a unique key that only this MapLine has.
                        mapLines
                    }
                </MapContainer>
            </div>
        );
    }
}

export default Map;
