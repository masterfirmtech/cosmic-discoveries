import ObservatoryMap from "../components/ObservatoryMap";

function Observatories() {
  const observatories = [
    {
      name: "Greenwich Observatory",
      location: "London, UK",
      description: "Historic observatory where time standards (GMT) were established."
    },
    {
      name: "Mauna Kea Observatory",
      location: "Hawaii, USA",
      description: "One of the best locations in the world for deep space observation."
    },
    {
      name: "ALMA Observatory",
      location: "Chile",
      description: "Advanced telescope array used to study distant galaxies."
    }
  ];

  return (
    <div  className="explore-page" style={styles.container}>
      <h1 style={styles.header}>Observatories</h1>

      {/* MAP SECTION */}
      <div style={styles.mapContainer}>
        <ObservatoryMap />
      </div>

      {/* LIST SECTION */}
      {observatories.map((item, index) => (
        <div key={index} style={styles.card}>
          <h3 style={styles.title}>{item.name}</h3>
          <p style={styles.location}>📍 {item.location}</p>
          <p style={styles.text}>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Observatories;

const styles = {
  container: {
    padding: "20px",
    textAlign: "center"
  },
  header: {
    marginBottom: "20px",
    color: "#0f172a"
  },
  mapContainer: {
    marginBottom: "20px",
    borderRadius: "12px",
    overflow: "hidden"
  },
  card: {
    margin: "15px auto",
    width: "320px",
    borderRadius: "12px",
    background: "#0f172a",
    color: "white",
    padding: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
  },
  title: {
    fontSize: "18px",
    color: "#38bdf8",
    marginBottom: "5px"
  },
  location: {
    fontSize: "13px",
    opacity: 0.8,
    marginBottom: "5px"
  },
  text: {
    fontSize: "14px",
    opacity: 0.9
  }
};