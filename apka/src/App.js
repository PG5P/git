import "./App.css";

function App() {
  return (
    <div className="cv">

      {/* GÓRNA CZĘŚĆ CV */}
      <div className="top">

        {/* LEWA STRONA - ZDJĘCIE */}
        <div className="photo-section">
          <img
            src="/zdj.jpg"
            alt="Patryk Gawlyta"
            className="profile-photo"
          />
        </div>

        {/* PRAWA STRONA - INFORMACJE */}
        <div className="info">

          <h1>Patryk Gawlyta</h1>

          <h2>Programista</h2>

          <p className="description">
            Mam 19 lat i interesuję się programowaniem oraz
            tworzeniem aplikacji internetowych. Chętnie uczę się
            nowych technologii i rozwijam swoje umiejętności.
          </p>

          <div className="contact">
            <h3>Kontakt</h3>

            <p>📧 patryk@email.com</p>
            <p>📞 600 233 000</p>
            <p>📍 Polska</p>
          </div>

          <div className="skills">
            <h3>Umiejętności</h3>

            <div className="skill">
              <span>HTML / CSS</span>
              <div className="bar">
                <div className="progress html"></div>
              </div>
            </div>

            <div className="skill">
              <span>JavaScript</span>
              <div className="bar">
                <div className="progress js"></div>
              </div>
            </div>

            <div className="skill">
              <span>React</span>
              <div className="bar">
                <div className="progress react"></div>
              </div>
            </div>
          </div>

        </div>
      </div>


      {/* DOLNA CZĘŚĆ - PROJEKT */}
      <div className="project-section">

        <h2>Mój projekt</h2>

        <div className="project">

          <img
            src="/zdjj.png"
            alt="Mój projekt"
            className="project-image"
          />

          <div className="project-info">

            <h3>Aplikacja internetowa</h3>

            <p>
              Projekt wykonany w React. Aplikacja została stworzona
              jako przykład moich umiejętności programistycznych.
            </p>

            <p>
              <strong>Technologie:</strong> HTML, CSS, JavaScript, React
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default App;