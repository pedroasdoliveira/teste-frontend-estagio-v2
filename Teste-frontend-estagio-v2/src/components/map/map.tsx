import React from "react";
import { Marker, Popup, TileLayer, MapContainer } from "react-leaflet";
import LocationMarker from "../locations/locations";

const Map = () => {
  return (
    <MapContainer center={[-19.264235, -46.092436]} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationMarker />
      {/* <Marker position={[-19.264235, -46.092436]}>
        <Popup>Posição</Popup>
      </Marker> */}
    </MapContainer>
  );
};

export default Map;
