import React from "react";
import profile from "../assets/profile.jpg";
import figma from "../assets/figma.png";
import ps from "../assets/ps.png";
import ai from "../assets/ai.png";
import "../styles/About.css";

function About() {
  return (
    <div className="about-section d-flex align-items-center justify-content-center px-4">
      <div className="row align-items-center w-100" style={{ maxWidth: "1200px" }}>
        <div className="col-md-6 text-section">
          <h4 className="text-orange">Hello, I’m</h4>
          <h1 className="fw-bold">ENDI PERMANA</h1>
          <p className="lead text-success fw-semibold">
            Seorang Web Developer & Data Enthusiast dari Indonesia.
          </p>
          <p className="text-muted">
            Saya antusias membangun aplikasi web modern dengan React dan Flask, serta memiliki semangat untuk terus belajar dan berkembang di dunia teknologi.
          </p>
          <a href="#about" className="btn btn-primary mt-3">Tentang Saya</a>
        </div>

        <div className="col-md-6 position-relative d-flex justify-content-center">
          <img src={profile} alt="Profile" className="profile-image" />

          <img src={ai} alt="AI" className="floating-icon icon-ai" />
          <img src={ps} alt="PS" className="floating-icon icon-ps" />
          <img src={figma} alt="Figma" className="floating-icon icon-figma" />
        </div>
      </div>
    </div>
  );
}

export default About;
