import './Careers.css';


const Careers = () => {
  return (
    <div className="careers-page">
      <section className="careers-hero">
        <div className="container">
          <h1>Join the Flight Revolution</h1>
          <p>We’re Zephyra Dynamics, and we’re building the future of flight. If you’re bold, creative, and ready to push boundaries, we want you on our team.</p>
        </div>
      </section>

      <section className="why-work-with-us">
        <div className="container">
          <h2>Why Work With Us?</h2>
          <ul>
            <li><strong>Innovation First</strong> – Work on groundbreaking eVTOL tech.</li>
            <li><strong>Collaborative Vibes</strong> – Ideas soar here, no egos.</li>
            <li><strong>Impact</strong> – Shape how cities move tomorrow.</li>
          </ul>
        </div>
      </section>

      <section className="open-positions bg-light">
        <div className="container">
          <h2>Open Positions</h2>
          <div className="position-card">
            <h3>Aerospace Engineer</h3>
            <p>Design and test eVTOL systems. Bring 5+ years in aerospace and a love for electric flight.</p>
          </div>
          <div className="position-card">
            <h3>UX/UI Designer</h3>
            <p>Build intuitive interfaces for pilots and riders. Show us your portfolio and 3+ years’ experience.</p>
          </div>
          <div className="position-card">
            <h3>Operations Manager</h3>
            <p>Plan urban flight networks. Bring logistics know-how and a visionary spark.</p>
          </div>
        </div>
      </section>

      <section className="apply-now">
        <div className="container">
          <h2>Apply Now</h2>
          <p>Email your resume and a 200-word pitch on why you’re our next teammate to <a href="mailto:careers@zephyradynamics.com">careers@zephyradynamics.com</a>.</p>
          <blockquote className="quote">“The sky’s not the limit—it’s where we start.”</blockquote>
        </div>
      </section>
    </div>
  );
};

export default Careers;