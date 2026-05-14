import { useEffect, useState } from "react";

function VisitorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let visits = localStorage.getItem("visits");

    visits = visits ? parseInt(visits) + 1 : 1;

    localStorage.setItem("visits", visits);
    setCount(visits);
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Visitors</h2>
      <p style={styles.count}>{count}</p>
    </div>
  );
}

export default VisitorCounter;

const styles = {
  container: {
    padding: "15px",
    margin: "10px auto",
    width: "200px",
    textAlign: "center",
    borderRadius: "12px",
    background: "#0f172a",
    color: "white",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
  },
  title: {
    fontSize: "16px",
    marginBottom: "5px",
    opacity: 0.8
  },
  count: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#38bdf8"
  }
};