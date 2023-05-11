import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./map.css";

function LocationMarker() {
  const [markers] = useState([
    [41.04398479596531, 28.8758223955257],
    [41.04346085310658, 28.87545493289595],
    [41.0433900496931, 28.87589213295581],
  ]);
  const [school] = useState([[41.04363280392604, 28.875774115764937]]);
  return (
    <div>
      <div className="title">
        <h1>Öz-De-Bir Ortaokulu Projesi</h1>
      </div>
      <MapContainer
        className="map"
        center={[41.04362838398769, 28.875784857246703]}
        zoom={16}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">1OpenStreetMap</a> contributors'
        />
        {markers.map((m, i) => (
          <Marker key={i} position={m}>
            <Popup>Çöp kovası</Popup>
          </Marker>
        ))}
        {school.map((m, i) => (
          <Marker key={i} position={m}>
            <Popup className="school">
              <p>Özdebir Ortaokulu</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
export default LocationMarker;
