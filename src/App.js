import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./App.css";
function App() {
  return (
    <div id="map" style={{ height: '100vh' ,width:"100%",border:"2px solid red" }}>
      <MapContainer center={[51.505, -0.09]} zoom={13}  style={{width:"100%",height:"100%"}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
