import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function LocationMarker() {
  const [markers] = useState([
    [51.505, -0.09],
    [51.505, -0.02],
    [51.505, -0.01],
  ]);
  return (
    <MapContainer
      style={{ width: "100vw", height: "100vh" }}
      center={[51.505, -0.09]}
      zoom={12}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">1OpenStreetMap</a> contributors'
      />
      {markers.map((m, i) => (
        <Marker key={i} position={m}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
export default LocationMarker;
