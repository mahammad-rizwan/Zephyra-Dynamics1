import { FaRocket, FaEye, FaReact, FaQuoteLeft } from "react-icons/fa";
import { IoMdSpeedometer } from "react-icons/io";
import { GiProgression } from "react-icons/gi";
import "./Home.css";
import { useNavigate } from 'react-router-dom';



import eVOLT  from './assets/images/eVOLT.png';
import expert1  from './assets/images/eVOLT.png';
import expert2 from './assets/images/eVOLT.png';
import expert3 from './assets/images/eVOLT.png';
import zephraVideo from './assets/images/zephyra_video.mp4';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-video-container">
          <video 
            className="hero-video"
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src={zephraVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>
        </div>

        <div className="hero-content">
          <h1>Redefining Urban Mobility</h1>
          <p className="hero-subtitle">Pioneering the future of transportation with cutting-edge eVTOL technology</p>
          <button 
        className="cta-button" 
        onClick={() => navigate('/technology')}
      >
        Explore Our Technology
      </button>
        </div>
      </header>

      {/* Product Section */}
      <section className="product-section">
        <div className="section-container">
          <div className="product-image-container">
            <img src={eVOLT} alt="Jetson ONE eVTOL" className="product-image" />
          </div>
          <div className="product-content">
            <h2 className="section-title">Jetson ONE <span className="highlight">eVTOL</span></h2>
            <p className="product-description">
              Zephyra Dynamics is revolutionizing personal air mobility with our flagship single-passenger eVTOL aircraft. 
              Featuring a maximum takeoff weight of approximately 300 kg and powered by 8 bi-axial propulsion systems, 
              the Jetson ONE combines cutting-edge aerospace engineering with sustainable electric propulsion.
            </p>
            
            <div className="specs-grid">
              <div className="spec-item">
                <IoMdSpeedometer className="spec-icon" />
                <div>
                  <h3>Top Speed</h3>
                  <p>250 km/h</p>
                </div>
              </div>
              <div className="spec-item">
                <GiProgression className="spec-icon" />
                <div>
                  <h3>Range</h3>
                  <p>150 km</p>
                </div>
              </div>
              <div className="spec-item">
                <FaRocket className="spec-icon" />
                <div>
                  <h3>Propulsion</h3>
                  <p>8 Electric Motors</p>
                </div>
              </div>
              <div className="spec-item">
                <FaReact className="spec-icon" />
                <div>
                  <h3>Battery</h3>
                  <p>Lithium-Ion 50 kWh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section">
        <div className="section-container">
          <div className="mission-content">
            <div className="mission-block">
              <div className="icon-container">
                <FaRocket className="mission-icon" />
              </div>
              <h3>Our Mission</h3>
              <p>
                To create cutting-edge eVTOL solutions that reduce carbon emissions, alleviate transportation
                bottlenecks, and provide affordable air mobility, starting with transformative impact in Kashmir
                and beyond.
              </p>
            </div>
            
            <div className="mission-block">
              <div className="icon-container">
                <FaEye className="mission-icon" />
              </div>
              <h3>Our Vision</h3>
              <p>
                To become a global leader in electric aviation by delivering scalable, eco-friendly aircraft that
                redefine how people move in urban and rural landscapes.
              </p>
            </div>
          </div>
          
          <div className="values-content">
            <h2 className="section-title">Our <span className="highlight">Competitive Edge</span></h2>
            <ul className="values-list">
              <li className="value-item">
                <FaReact className="value-icon" />
                <span>Cost-effective, lightweight design tailored for single-passenger use</span>
              </li>
              <li className="value-item">
                <FaReact className="value-icon" />
                <span>Regional expertise and launch strategy centered on Kashmir</span>
              </li>
              <li className="value-item">
                <FaReact className="value-icon" />
                <span>Focus on sustainability and scalability in price-sensitive markets</span>
              </li>
              <li className="value-item">
                <FaReact className="value-icon" />
                <span>Innovative electric aircraft manufacturing solutions</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="section-container">
          <h2 className="section-title">Industry <span className="highlight">Recognition</span></h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-text">
                "Zephyra Dynamics represents the future of urban air mobility with their innovative approach to eVTOL technology."
              </p>
              <div className="testimonial-author">
                <img src={expert1} alt="Dr. Aisha Khan" className="author-image" />
                <div>
                  <h4>Dr. Aisha Khan</h4>
                  <p>Director, Aerospace Research Institute</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-text">
                "The Jetson ONE has the potential to revolutionize transportation in mountainous regions like Kashmir."
              </p>
              <div className="testimonial-author">
                <img src={expert2} alt="Prof. Rajiv Menon" className="author-image" />
                <div>
                  <h4>Prof. Rajiv Menon</h4>
                  <p>Chair, Urban Mobility Forum</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-text">
                "Zephyra's focus on sustainable aviation aligns perfectly with global environmental goals."
              </p>
              <div className="testimonial-author">
                <img src={expert3} alt="Lisa Zhang" className="author-image" />
                <div>
                  <h4>Lisa Zhang</h4>
                  <p>CEO, GreenTech Ventures</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;