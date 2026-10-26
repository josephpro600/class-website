
function Contact({ schoolName, onNavigate }) {
  return (
    <main>
      <h2>Contact Us</h2>

      <p>School: {schoolName}</p>
      <p>Location: Rwanda</p>
      <p>
        Email: <a href="mailto:info@example.com">
          kivumu@gmaiol.com
        </a>
      </p>

      <button onClick={() => onNavigate("Home")}>
        Return to Home
      </button>
    </main>
  );
}

export default Contact;
