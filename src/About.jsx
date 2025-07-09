import React from 'react';
import './About.css';
import { FaLinkedin, FaRocket, FaCalendarAlt, FaUserTie } from 'react-icons/fa';
import sadiqImage from './assets/images/sadiq.jpg';
import suhanaImage from './assets/images/suhana.jpg';
import asimImage from './assets/images/asim.jpg';



const teamMembers = [
  {
    name: 'Sadiq Ali Mir',
    role: 'Co-Founder & Technical Lead',
    desc: 'Final-year Aerospace Engineering student with deep expertise in aerodynamics and electric propulsion. Spearheads the technical design of our innovative propulsion system.',
    img: sadiqImage, // Replace with actual image path
    link: 'https://www.linkedin.com/in/sadiqalimir?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  },
  {
    name: 'Suhana Arsh',
    role: 'Co-Founder & Design Lead',
    desc: 'Final-year Aerospace Engineering student specializing in aircraft structures and systems integration. Oversees aircraft design and ensures seamless coordination across development phases.',
    img: suhanaImage, // Replace with actual image path
    link: 'https://www.linkedin.com/in/suhanaarsh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  },
  {
    name: 'Aasim Baqir',
    role: 'Media Head & Manager',
    desc: 'Final-year Aerospace Engineering student specializing in aircraft structures and systems integration. Oversees aircraft design and ensures seamless coordination across development phases.',
    img: asimImage, // Replace with actual image path
    link: 'https://www.linkedin.com/in/aasim-asgar-5ba47a252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  }
];

const timelineData = [
  {
    year: '2025',
    title: 'Concept & Prototype',
    description: 'Concept finalization, initial prototype design, and early-stage funding.',
    icon: <FaCalendarAlt />
  },
  {
    year: '2026',
    title: 'First Flight',
    description: 'Prototype testing and first flight demonstration in Kashmir.',
    icon: <FaRocket />
  },
  {
    year: '2027-2028',
    title: 'Commercial Rollout',
    description: 'Regulatory approval and commercial rollout.',
    icon: <FaUserTie />
  }
];

const About = () => {
  return (
    <>
      <div className="about-us-header">
        <div className="container">
          <div className="header-content">
            <h1>Zephyra Dynamics</h1>
            <p>Revolutionizing urban transportation through sustainable air mobility</p>
          </div>
        </div>
      </div>

      <section className="our-story">
        <div className="container">
          <h2>Who We Are</h2>
          <p className="story-text">
            Zephyra Dynamics is a startup born in 2023, driven by a bold vision: to revolutionize
            transportation in congested urban landscapes. Our multi-rotor eVTOL is the first step
            toward a world where flight is as common as driving.
          </p>
        </div>
      </section>

      <section className="our-mission">
        <div className="container">
          <h2>Our Mission</h2>
          <p className="mission-statement">
            We're here to make city travel effortless, eco-friendly, and exhilarating—one flight at a time.
          </p>
        </div>
      </section>

      <section className="our-vision">
        <div className="container">
          <h2>Our Vision</h2>
          <p className="vision-text">
            Imagine a future where rooftops become launchpads, and the skyline is your highway.
            We're building that future, connecting cities through sustainable air mobility.
          </p>
        </div>
      </section>

      <section className="development-roadmap">
        <div className="container">
          <h2>Development Roadmap</h2>
          <div className="timeline">
            {timelineData.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-icon">{item.icon}</div>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="launch-plan">
        <div className="container">
          <h2>Launch Plan</h2>
          <p>
            Zephyra Dynamics plans to launch its first eVTOL aircraft in Kashmir by late 2026, targeting a
            public demonstration flight to showcase its capabilities to stakeholders, regulators, and potential
            customers.
          </p>
        </div>
      </section>

      <section className="meet-the-team">
        <div className="container">
          <h2>Meet The Team</h2>
          <div className="team-cards">
            {teamMembers.map((member, index) => (
              <div className="team-card" key={index}>
                <img src={member.img} alt={member.name} />
                <h3>{member.name}</h3>
                <p className="position">{member.role}</p>
                <p className="bio">{member.desc}</p>
                <a href={member.link} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                  <FaLinkedin /> Connect
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;