import Card from "../components/Card";

function Books() {
  const books = [
    {
      title: "Cosmos",
      description: "A classic book that explains the universe in a simple and beautiful way.",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794"
    },
    {
      title: "A Brief History of Time",
      description: "Explains black holes, time, and the origin of the universe.",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da"
    },
    {
      title: "Astrophysics for People in a Hurry",
      description: "A simple introduction to space science for beginners.",
      image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
    }
  ];

  return (
    <div className="explore-page" style={styles.container}>
      <h1 style={styles.header}>Space Books</h1>

      {books.map((book, index) => (
        <Card
          key={index}
          title={book.title}
          description={book.description}
          image={book.image}
        />
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
  }
};