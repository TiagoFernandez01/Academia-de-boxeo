import 'leaflet/dist/leaflet.css';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapaLeaflet = () => {
  const position = [-34.70692004675972, -58.38029448573419]; // Coordenadas de la Torre Eiffel

  return (
    <MapContainer center={position} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        
      />
      <Marker position={position}>
        <Popup>
        Academia de boxeo, Lanús,
        Eva Perón 1619
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapaLeaflet;
