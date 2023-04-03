import { useState } from "react";
import { TileLayer, MapContainer, Marker, Popup } from "react-leaflet";
import { useMap } from "react-leaflet/hooks";
function LocationMarker() {
  const [markers] = useState([
    [51.505, -0.09],
    [51.505, -0.02],
    [51.505, -0.01],
  ]);
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((m) => (
        <Marker position={m}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
export default LocationMarker;
