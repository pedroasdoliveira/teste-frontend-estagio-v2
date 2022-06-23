import React, { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import equipmentPositionHistories from "../../data/equipmentPositionHistory.json";
import { equipmentName } from "../../data/settings/settings-equipments";

type Props = {
  children?: React.ReactNode;
}

type PositionTypes = {
  equipmentId: string;
  positions: [
    {
      date: string;
      lat: number;
      lon: number;
    }
  ];
};

const historyPositions = () => {
  return equipmentPositionHistories.map((positionHistory) =>
    positionHistory.positions.reverse()
  );
};

historyPositions();

const LocationMarker = (children: Props) => {
  return (
    equipmentPositionHistories.map((positionHistory, index) => (
      <Marker
        key={index}
        position={[
          positionHistory.positions[0].lat,
          positionHistory.positions[0].lon,
        ]}
      >
        <Popup>
          <div>
            <span>Nome do equipamento: {equipmentName(positionHistory.equipmentId)}</span>
          </div>
        </Popup>
      </Marker>
    ))  
  )
};

export default LocationMarker;
