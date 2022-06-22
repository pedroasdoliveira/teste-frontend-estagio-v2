import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <MapContainer center={[-19.264235, -46.092436]} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[-19.264235, -46.092436]}>
          <Popup>Posição</Popup>
        </Marker>
      </MapContainer>
    </BrowserRouter>
  );
}

export default App;
