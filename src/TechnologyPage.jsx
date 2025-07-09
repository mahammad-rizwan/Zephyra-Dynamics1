import './TechnologyPage.css';
import evtolImage from '/src/assets/images/eVOLT.png'; // Replace with your eVTOL image
import silentFlightIcon from '/src/assets/images/eVOLT.png'; // Replace with your icons
import easyAccessIcon from '/src/assets/images/eVOLT.png';
import sustainableIcon from '/src/assets/images/eVOLT.png';
import commuteIcon from '/src/assets/images/eVOLT.png';
import personalIcon from '/src/assets/images/eVOLT.png';
import emergencyIcon from '/src/assets/images/eVOLT.png';



const TechnologyPage = () => {
  return (
    <div className="technology-page">
      <section className="hero">
        <div className="hero-content">
          <h1>The Zephyra eVTOL</h1>
          <p className="subtitle">Fly the Future</p>
        </div>
        <div className="hero-image">
          <img src={evtolImage} alt="Zephyra eVTOL" />
        </div>
      </section>

      <section className="overview">
        <div className="container">
          <h2>Engineered for Urban Life and Personal Freedom</h2>
          <p>Our multi-rotor eVTOL is designed with the modern city in mind, offering a revolutionary way to navigate congested urban landscapes. With its cutting-edge design and fully electric power, the Zephyra eVTOL provides a seamless and exhilarating experience, your personal ticket above the gridlock.</p>
        </div>
      </section>

      <section className="specifications bg-light">
        <div className="container">
          <h2>Key Specifications</h2>
          <ul className="specs-list">
            <li>
              <strong>Capacity:</strong> 2 passengers (pilot included)
            </li>
            <li>
              <strong>Range:</strong> 50 miles on a single charge
            </li>
            <li>
              <strong>Top Speed:</strong> 80 mph
            </li>
            <li>
              <strong>Configuration:</strong> Multi-rotor for stability and vertical takeoff
            </li>
            <li>
              <strong>Power:</strong> 100% electric, zero-emission
            </li>
          </ul>
        </div>
      </section>

      <section className="why-it-stands-out">
        <div className="container">
          <h2>Why It Stands Out</h2>
          <div className="features-grid">
            <div className="feature-item">
              <img src={silentFlightIcon} alt="Near-Silent Flight" className="feature-icon" />
              <h3>Near-Silent Flight</h3>
              <p>Experience the city like never before with our whisper-quiet rotors, ensuring city-friendly operation without noise pollution.</p>
            </div>
            <div className="feature-item">
              <img src={easyAccessIcon} alt="Easy Access" className="feature-icon" />
              <h3>Easy Access</h3>
              <p>Enjoy unparalleled convenience with the ability to take off and land on rooftops or small designated pads, bypassing traditional airport limitations.</p>
            </div>
            <div className="feature-item">
              <img src={sustainableIcon} alt="Sustainable" className="feature-icon" />
              <h3>Sustainable</h3>
              <p>Embrace the future of clean transportation with 100% electric power, resulting in zero emissions and a reduced carbon footprint.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="how-you-ll-use-it bg-light">
        <div className="container">
          <h2>How You’ll Use It</h2>
          <div className="use-cases-grid">
            <div className="use-case-item">
              <img src={commuteIcon} alt="City Commutes" className="use-case-icon" />
              <h3>City Commutes</h3>
              <p>Transform your daily travel from downtown to the suburbs, reaching your destination in minutes, not hours.</p>
            </div>
            <div className="use-case-item">
              <img src={personalIcon} alt="Personal Journeys" className="use-case-icon" />
              <h3>Personal Journeys</h3>
              <p>Experience the freedom of private flight above the everyday chaos, making personal travel more efficient and enjoyable.</p>
            </div>
            <div className="use-case-item">
              <img src={emergencyIcon} alt="Emergency Access" className="use-case-icon" />
              <h3>Emergency Access</h3>
              <p>Provide rapid access to areas where roads are congested or impassable, significantly improving response times for critical situations.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPage;