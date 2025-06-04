import React, { useState } from "react";

function Admin() {
  const [profileFile, setProfileFile] = useState(null);
  const [cvFile, setCvFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (profileFile) formData.append("profile", profileFile);
    if (cvFile) formData.append("cv", cvFile);

    const res = await fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Admin Panel – Upload File</h1>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleUpload}>
        <div className="mb-3">
          <label className="form-label">Foto Profil (JPEG)</label>
          <input
            type="file"
            className="form-control"
            accept="image/jpeg"
            onChange={(e) => setProfileFile(e.target.files[0])}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">CV (PDF)</label>
          <input
            type="file"
            className="form-control"
            accept="application/pdf"
            onChange={(e) => setCvFile(e.target.files[0])}
          />
        </div>
        <button type="submit" className="btn btn-primary">Upload</button>
      </form>
    </div>
  );
}

export default Admin;
