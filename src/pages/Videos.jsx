function Videos() {

  const videos = [
    {
      id: "21X5lGlDOfg",
      title: "NASA Live Stream"
    },

    {
      id: "HCDVN7DCzYE",
      title: "Journey Through Space"
    }
  ];

  return (
    <div style={styles.container}>

      <h1 style={styles.header}>Space Videos</h1>

      <div style={styles.videoContainer}>

        {videos.map((video, index) => (

          <div key={index} style={styles.card}>

            <iframe
              width="100%"
              height="200"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              allowFullScreen
            ></iframe>

            <p style={styles.title}>
              {video.title}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Videos;

const styles = {

  container: {
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#e2e8f0",
    minHeight: "100vh"
  },

  header: {
    marginBottom: "20px",
    color: "#0f172a"
  },

  videoContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px"
  },

  card: {
    width: "320px",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    background: "#0f172a",
    paddingBottom: "10px"
  },

  title: {
    color: "white",
    fontSize: "14px",
    marginTop: "8px"
  }
};