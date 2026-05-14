function Constellations() {
  const constellations = [
    {
      name: "Orion",
      stars: 7,
      description: "Famous constellation in the night sky"
    },
    {
      name: "Ursa Major",
      stars: 7,
      description: "Contains the Big Dipper"
    }
  ];

  return (
    <div className="explore-page" style={styles.container}>
      <h1 style={styles.header}>Constellations</h1>

      {constellations.map((item, index) => (
        <div key={index} style={styles.card}>
          <h3 style={styles.title}>{item.name}</h3>
          <p style={styles.text}>{item.description}</p>
          <p style={styles.extra}>⭐ Stars: {item.stars}</p>
        </div>
      ))}
    </div>
  );
}

export default Constellations;

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
    background: "#0f172a",
    color: "white",
    padding: "15px",
    margin: "10px auto",
    width: "300px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
  },
  title: {
    fontSize: "18px",
    color: "#38bdf8"
  },
  text: {
    fontSize: "14px",
    opacity: 0.9
  },
  extra: {
    marginTop: "8px",
    fontSize: "13px",
    opacity: 0.7
  }
};