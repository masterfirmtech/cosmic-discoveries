function Videos() {
  return (
    <div className="explore-page"  style={styles.container}>
      <h1>Space Videos</h1>

      <div style={styles.card}>
        <iframe
          width="100%"
          height="200"
          src="https://www.youtube.com/embed/libKVRa01L8"
          title="Space Video"
          allowFullScreen
        ></iframe>
      </div >

      <div  style={styles.card}>
        <iframe
          width="100%"
          height="200"
          src="https://www.youtube.com/embed/0qo78R_yYFA"
          title="Space Video"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Videos;

const styles = {
  container: {
    padding: "20px",
    textAlign: "center"
  },
  card: {
    margin: "15px auto",
    width: "300px",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
  }
};