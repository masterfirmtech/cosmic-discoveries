function Planets() {
  const planets = [
    {
      name: "Mercury",
      type: "Terrestrial",
      description: "Closest planet to the Sun and the smallest in the solar system."
    },
    {
      name: "Venus",
      type: "Terrestrial",
      description: "Hottest planet due to its thick toxic atmosphere."
    },
    {
      name: "Earth",
      type: "Terrestrial",
      description: "The only known planet that supports life."
    },
    {
      name: "Mars",
      type: "Terrestrial",
      description: "Known as the Red Planet with signs of ancient water."
    },
    {
      name: "Jupiter",
      type: "Gas Giant",
      description: "Largest planet in the solar system with a giant storm."
    }
  ];

  return (
    <div className="explore-page"  style={styles.container}>
      <h1 style={styles.header}>Planets</h1>

      {planets.map((planet, index) => (
        <div key={index} style={styles.card}>
          <h2 style={styles.title}>{planet.name}</h2>
          <p style={styles.type}>Type: {planet.type}</p>
          <p style={styles.text}>{planet.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Planets;

const styles = {
  container: {
    padding: "20px",
    textAlign: "center"
  },
  header: {
    marginBottom: "20px",
    color: "#0f172a"
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
    fontSize: "20px",
    color: "#38bdf8",
    marginBottom: "5px"
  },
  type: {
    fontSize: "13px",
    opacity: 0.8,
    marginBottom: "5px"
  },
  text: {
    fontSize: "14px",
    opacity: 0.9
  }
};