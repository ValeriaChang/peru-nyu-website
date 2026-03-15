import React from "react";
import "./App.css";

function App() {

  const events = [
    { title: "Peruvian Game Night", date: "March, 2024" },
    { title: "Peruvian Student Mixer", date: "February, 2024" },
    { title: "Peruvian Chinese Celebration", date: "May, 2024" }
  ];

  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">
        <h2>NYU Peruvian Student Association</h2>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#events">Events</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <h1>¡Bienvenidos a Peru NYU!</h1>
        <p>Connecting the Peruvian community at NYU</p>
      </section>

      {/* INFO SECTION */}
      <section className="info-section">
        <div className="info-box">
          <h3>Upcoming Events</h3>
          <p>Check out our latest events and activities.</p>
        </div>

        <div className="info-box">
          <h3>Our Mission</h3>
          <p>Promoting Peruvian culture and community.</p>
        </div>

        <div className="info-box">
          <h3>Get Involved</h3>
          <p>Join our club and make new friends.</p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <h2>About NYU Peruvian Student Association</h2>
        <p>
          We are a community of Peruvian students and friends at NYU,
          celebrating our heritage and sharing our culture.
        </p>
      </section>

      {/* EVENTS */}
      <section id="events" className="events">
        <h2>Upcoming Events</h2>
        <div className="event-grid">
          {events.map((event, index) => (
            <div className="event-card" key={index}>
              <h3>{event.title}</h3>
              <p>{event.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery">
        <div className="gallery-grid">
          {["event1.jpeg","event2.jpeg","event3.jpeg"].map((img, index) => (
            <img 
              key={index}
              src={`/gallery/${img}`}
              alt={`Peru event ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* JOIN */}
      <section id="join" className="join">
        <h2>Join Our Community!</h2>
        <a 
          href="https://www.instagram.com/perunyu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="instagram-btn">
            Follow us on Instagram!
          </button>
        </a>
      </section>

      {/* FOOTER */}
      <footer>
        <p>NYU Peruvian Student Association</p>
      </footer>

    </div>
  );
}

export default App;
