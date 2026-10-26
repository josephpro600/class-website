
function Home({ schoolName, className, onNavigate }) {
  return (
    <main>
      <h2>Welcome to Our Class Website</h2>

      <p>Welcome to {schoolName}!</p>
      <p>Class: {className}</p>

      <p>
        This website introduces our class, our students,
        and the subjects we study in Software Development.
      </p>

      <h3>Explore Our Website</h3>

      <button onClick={() => onNavigate("About")}>
        Learn About Us
      </button>{" "}

      <button onClick={() => onNavigate("Students")}>
        View Students
      </button>{" "}

      <button onClick={() => onNavigate("Contact")}>
        Contact Us
      </button>
    </main>
  );
}

export default Home;
