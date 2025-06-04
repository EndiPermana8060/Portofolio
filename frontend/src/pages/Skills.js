import React from "react";
import "../styles/Skills.css"; // Pastikan file CSS sudah dibuat

function Skills() {
  const skills = [
    { name: "React", description: "Library UI modern berbasis komponen." },
    { name: "Python", description: "Bahasa pemrograman serbaguna & powerful." },
    { name: "Flask", description: "Framework backend Python ringan & cepat." },
    { name: "JavaScript", description: "Bahasa scripting inti untuk web interaktif." },
    { name: "CSS", description: "Bahasa untuk styling halaman web." },
  ];

  return (
    <div className="container mt-5 skill-container">
      <h1 className="text-center mb-4">Skill Saya</h1>
      <div className="row">
        {skills.map((skill, idx) => (
          <div className="col-md-4 mb-4" key={idx}>
            <div className="card skill-card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title fw-bold">{skill.name}</h5>
                <p className="card-text">{skill.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
