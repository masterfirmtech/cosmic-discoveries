import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// FIX: Leaflet default icon issue
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function ObservatoryMap() {
  const observatories = [
    {
      name: "Greenwich Observatory",
      position: [51.4769, 0.0005],
    },
    {
      name: "Mauna Kea Observatory",
      position: [19.8207, -155.4681],
    },
    {
      name: "ALMA Observatory",
      position: [-23.029, -67.753],
    }
  ];

  return (
    <div style={{ width: "100%", height: "400px", margin: "0 auto" }}>
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: "100%", width: "100%", borderRadius: "12px" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {observatories.map((obs, index) => (
          <Marker key={index} position={obs.position}>
            <Popup>{obs.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default ObservatoryMap;