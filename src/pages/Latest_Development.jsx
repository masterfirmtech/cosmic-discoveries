function Latest_Development() {
  const updates = [
    {
      title: "New Exoplanet Discovered",
      description: "Scientists found a planet similar to Earth.",
      date: "2026-05-10"
    },
    {
      title: "Mars Rover Update",
      description: "Rover sends new images from Mars surface.",
      date: "2026-05-08"
    },
    {
      title: "Black Hole Image Improved",
      description: "NASA releases clearer image of black hole.",
      date: "2026-05-05"
    }
  ];

  return (
    <div className="explore-page" style={styles.container}>
      <h1 style={styles.header}>Latest Developments</h1>

      {updates.map((item, index) => (
        <div key={index} style={styles.card}>
          <h3 style={styles.title}>{item.title}</h3>
          <p style={styles.text}>{item.description}</p>
          <small style={styles.date}>{item.date}</small>
        </div>
      ))}
    </div>
  );
}

export default Latest_Development;

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
    marginBottom: "5px",
    color: "#38bdf8"
  },
  text: {
    fontSize: "14px",
    opacity: 0.9
  },
  date: {
    display: "block",
    marginTop: "8px",
    fontSize: "12px",
    opacity: 0.6
  }
};