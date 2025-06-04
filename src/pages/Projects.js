import React from "react";
import "../styles/Projects.css"; // buat file ini

function Projects() {
  const projects = [
    {
      name: "Project A",
      description: "Deskripsi singkat tentang Project A yang menjelaskan fitur utamanya.",
      link: "https://github.com/username/project-a",
    },
    {
      name: "Project B",
      description: "Deskripsi singkat tentang Project B dengan fitur-fitur menarik.",
      link: "https://github.com/username/project-b",
    },
    {
      name: "Project C",
      description: "Proyek ini merupakan implementasi frontend + backend fullstack.",
      link: "https://github.com/username/project-c",
    },
  ];

  return (
    <div className="container mt-5 project-container">
      <h1 className="text-center mb-4">Portofolio Proyek</h1>
      <div className="row">
        {projects.map((project, idx) => (
          <div className="col-md-4 mb-4" key={idx}>
            <div className="card project-card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text flex-grow-1">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-primary mt-auto"
                >
                  Lihat GitHub / Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
