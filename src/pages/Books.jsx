function Books() {
  const books = [
    {
      title: "Cosmos",
      author: "Carl Sagan",
      description: "A classic book that explains the universe in a simple and beautiful way."
    },
    {
      title: "A Brief History of Time",
      author: "Stephen Hawking",
      description: "Explains black holes, time, and the origin of the universe."
    },
    {
      title: "Astrophysics for People in a Hurry",
      author: "Neil deGrasse Tyson",
      description: "A simple introduction to space science for beginners."
    }
  ];

  return (
    <div className="explore-page" style={styles.container}>
      <h1 style={styles.header}>Space Books</h1>

      {books.map((book, index) => (
        <div key={index} style={styles.card}>
          <h3 style={styles.title}>{book.title}</h3>
          <p style={styles.author}>By {book.author}</p>
          <p style={styles.text}>{book.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Books;

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
    width: "300px",
    borderRadius: "12px",
    background: "#0f172a",
    color: "white",
    padding: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
  },
  title: {
    fontSize: "18px",
    color: "#38bdf8",
    marginBottom: "5px"
  },
  author: {
    fontSize: "13px",
    opacity: 0.7,
    marginBottom: "5px"
  },
  text: {
    fontSize: "14px",
    opacity: 0.9
  }
};