import Card from "../components/Card";

function Comets() {

  const comets = [
    {
      title: "Halley’s Comet",
      description:
        "One of the most famous comets, visible from Earth every 76 years.",
      image:
        "https://images.unsplash.com/photo-1462331940025-496dfbfc7564"
    },

    {
      title: "Hale-Bopp",
      description:
        "An extremely bright comet last seen in 1997.",
      image:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa"
    },

    {
      title: "NEOWISE",
      description:
        "A recent comet visible in 2020 with a glowing tail.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
    }
  ];

  return (
    <div className="explore-page" style={styles.container}>

      <h1 style={styles.header}>Comets</h1>

      {comets.map((item, index) => (
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

export default Comets;

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