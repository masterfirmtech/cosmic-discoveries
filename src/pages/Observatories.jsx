import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const observatories = [
  {
    id: 1,
    name: "Greenwich Observatory",
    location: "London, UK",
    lat: 51.4779,
    lng: -0.0015,
    description: "Historic observatory where time standards (GMT) were established.",
    website: "https://www.rmg.co.uk/royal-observatory"
  },
  {
    id: 2,
    name: "Mauna Kea Observatory",
    location: "Hawaii, USA",
    lat: 19.8206,
    lng: -155.4681,
    description: "One of the best locations in the world for deep space observation.",
    website: "https://www.maunakeaobservatories.org/"
  },
  {
    id: 3,
    name: "ALMA Observatory",
    location: "Chile",
    lat: -23.0292,
    lng: -67.7549,
    description: "Advanced telescope array used to study distant galaxies.",
    website: "https://www.almaobservatory.org/"
  }
];

function Observatories() {
  const [userPosition, setUserPosition] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => setUserPosition([position.coords.latitude, position.coords.longitude]),
      () => console.log("Location access denied")
    );
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6 pt-10">
      <h1 className="text-5xl font-bold text-center mb-4">Major Observatories Worldwide</h1>
      <p className="text-center text-gray-400 mb-10 text-xl">Discover the world's most important astronomical sites</p>

      {/* Map */}
      <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl border border-gray-700" style={{ height: "550px" }}>
        <MapContainer center={[20, 0]} zoom={2} style={{ height: "100%", width: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {userPosition && (
            <Marker position={userPosition}>
              <Popup>You are here 🌌</Popup>
            </Marker>
          )}
          {observatories.map(obs => (
            <Marker key={obs.id} position={[obs.lat, obs.lng]}>
              <Popup>
                <b className="text-black font-bold">{obs.name}</b><br />
                <span className="text-gray-600">{obs.location}</span><br /><br />
                <p className="text-sm text-gray-800">{obs.description}</p><br />
                <a href={obs.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">🌐 Visit Website</a>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {observatories.map(obs => (
          <div key={obs.id} className="bg-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all text-left">
            <h3 className="text-2xl font-bold mb-2 text-white">{obs.name}</h3>
            <p className="text-blue-400 mb-3">📍 {obs.location}</p>
            <p className="text-gray-400 mb-6">{obs.description}</p>
            <a href={obs.website} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline inline-block font-medium">
              Official Website →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Observatories;