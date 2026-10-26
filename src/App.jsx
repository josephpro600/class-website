
import { useState } from "react";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Students from "./Students.jsx";
import Contact from "./Contact.jsx";

function App() {
  const schoolName = "EAV Kivumu TSS";
  const className = "L5 Software Development";

  const [currentView, setCurrentView] = useState("Home");
  const [count, setCount] = useState(0);

  function navigateTo(view) {
    setCurrentView(view);
  }

  return (
    <div>
      <header>
        <h1>{schoolName}</h1>
        <h2>{className}</h2>
        <p>Front-End Application Development with ReactJS</p>
      </header>

      <nav>
        <button onClick={() => navigateTo("Home")}>Home</button>{" "}
        <button onClick={() => navigateTo("About")}>About</button>{" "}
        <button onClick={() => navigateTo("Students")}>Students</button>{" "}
        <button onClick={() => navigateTo("Contact")}>Contact</button>
      </nav>

      <hr />

      {currentView === "Home" && (
        <Home
          schoolName={schoolName}
          className={className}
          onNavigate={navigateTo}
        />
      )}

      {currentView === "About" && <About />}

      {currentView === "Students" && <Students />}

      {currentView === "Contact" && (
        <Contact
          schoolName={schoolName}
          onNavigate={navigateTo}
        />
      )}

      <hr />

      <section>
        <h3>ReactJS Click Counter</h3>
        <p>You have clicked the button {count} times.</p>
        <button onClick={() => setCount(count + 1)}>
          Click Me
        </button>
        <button onClick={() => setCount(0)}>Reset Counter</button>
      </section>

      <footer>
        <p>© 2026 {schoolName} - Software Development</p>
      </footer>
    </div>
  );
}

export default App;
