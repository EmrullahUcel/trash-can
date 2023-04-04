import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function LocationMarker() {
  const [markers] = useState([
    [41.043615052454435, 28.875784211220004],
    [41.04375217749469, 28.876010680065452],
    [41.04346349286224, 28.87547640499433]
    ,
  ]);
  return (
    <MapContainer
      style={{ width: "100vw", height: "100vh" }}
      center={[41.04362838398769, 28.875784857246703]}
      zoom={16}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">1OpenStreetMap</a> contributors'
      />
      {markers.map((m, i) => (
        <Marker key={i} position={m}>
          <Popup>
            Çöp kovası
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
export default LocationMarker;
