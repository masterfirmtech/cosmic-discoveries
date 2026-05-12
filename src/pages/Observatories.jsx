import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const observatories = [ /* Keep the same array as before */ 
  // ... (copy the observatories array from the previous code I gave you)
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
          {userPosition && <Marker position={userPosition}><Popup>You are here</Popup></Marker>}
          {observatories.map(obs => (
            <Marker key={obs.id} position={[obs.lat, obs.lng]}>
              <Popup>
                <b>{obs.name}</b><br />
                {obs.location}<br /><br />
                {obs.description}<br />
                <a href={obs.website} target="_blank" rel="noopener noreferrer">🌐 Visit Website</a>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {observatories.map(obs => (
          <div key={obs.id} className="bg-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all">
            <h3 className="text-2xl font-bold mb-2">{obs.name}</h3>
            <p className="text-blue-400 mb-3">{obs.location}</p>
            <p className="text-gray-400 mb-6">{obs.description}</p>
            <a href={obs.website} target="_blank" className="text-blue-400 hover:underline">Official Website →</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Observatories;