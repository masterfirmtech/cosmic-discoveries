import './Categories_Body.css';
import { useState } from "react";

function Categories_Body() {

  const data = [
    { id: 1, name: "Planets", type: "space", desc: "Explore planets in our solar system" },
    { id: 2, name: "Comets", type: "space", desc: "Ice bodies traveling through space" },
    { id: 3, name: "Constellations", type: "stars", desc: "Patterns formed by stars" },
    { id: 4, name: "Observatories", type: "science", desc: "Places where space is studied" }
  ];

  const [filter, setFilter] = useState("all");

  const filteredData =
    filter === "all"
      ? data
      : data.filter(item => item.type === filter);

  return (
    <main className='categories-main'>

      <h2>Explore Space Categories</h2>

      {/* FILTER BUTTONS */}
      <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("space")}>Space</button>
        <button onClick={() => setFilter("stars")}>Stars</button>
        <button onClick={() => setFilter("science")}>Science</button>
      </div>

      {/* CARDS */}
      <div className="grid">
        {filteredData.map(item => (
          <div key={item.id} className="card">
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <span>{item.type}</span>
          </div>
        ))}
      </div>

    </main>
  )
}

export default Categories_Body;