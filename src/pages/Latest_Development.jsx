import Card from "../components/Card";

function Latest_Development() {

  const updates = [
    {
      title: "New Exoplanet Discovered",
      description: "Scientists found a planet similar to Earth.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
    },

    {
      title: "Mars Rover Update",
      description: "Rover sends new images from Mars surface.",
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa"
    },

    {
      title: "Black Hole Image Improved",
      description: "NASA releases clearer image of a black hole.",
      image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564"
    }
  ];

  return (
    <div className="explore-page" style={styles.container}>

      <h1 style={styles.header}>Latest Developments</h1>

      {updates.map((item, index) => (
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

export default Latest_Development;

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