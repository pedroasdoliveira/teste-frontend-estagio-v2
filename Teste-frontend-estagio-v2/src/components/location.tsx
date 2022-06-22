import React, { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";

const LocationMarker = () => {
  const [position, setPosition] = useState();

  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e: any) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  if (position) {
    return (
      <Marker position={position}>
        <Popup>Sua localização</Popup>
      </Marker>
    );
  }
};

export default LocationMarker;
