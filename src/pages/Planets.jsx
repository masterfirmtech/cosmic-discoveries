import Card from "../components/Card";

function Planets() {
  const planets = [
    {
      title: "Mercury",
      description: "Closest planet to the Sun and the smallest in the solar system.",
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa"
    },
    {
      title: "Venus",
      description: "Hottest planet due to its thick toxic atmosphere.",
      image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564"
    },
    {
      title: "Earth",
      description: "The only known planet that supports life.",
      image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4"
    },
    {
      title: "Mars",
      description: "Known as the Red Planet with signs of ancient water.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
    },
    {
      title: "Jupiter",
      description: "Largest planet in the solar system with a giant storm.",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca"
    }
  ];

  return (
    <div className="explore-page" style={styles.container}>
      <h1 style={styles.header}>Planets</h1>

      {planets.map((planet, index) => (
        <Card
          key={index}
          title={planet.title}
          description={planet.description}
          image={planet.image}
        />
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
  }
};