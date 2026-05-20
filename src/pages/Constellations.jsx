import Card from "../components/Card";

function Constellations() {

  const constellations = [
    {
      title: "Orion",
      description: "Famous constellation in the night sky with 7 main stars.",
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa"
    },
    {
      title: "Ursa Major",
      description: "Contains the Big Dipper and is one of the most recognizable patterns.",
      image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564"
    }
  ];

  return (
    <div className="explore-page" style={styles.container}>

      <h1 style={styles.header}>Constellations</h1>

      {constellations.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          description={item.description}
          image={item.image}
        />
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
  }
};