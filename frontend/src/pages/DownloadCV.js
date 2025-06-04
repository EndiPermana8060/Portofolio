import React from "react";
import cv from "../assets/cv.pdf"
import { FaDownload } from "react-icons/fa";
import "../styles/DownloadCV.css"; // custom styling

function DownloadCV() {
  return (
    <div className="container mt-5 text-center downloadcv-container">
      <h1 className="mb-4">Unduh CV Saya</h1>
      <p className="mb-3">Klik tombol di bawah untuk mengunduh CV dalam format PDF.</p>
      <a
        href={cv} // pastikan file ada di folder public dengan nama 'cv.pdf'
        download
        className="btn btn-success btn-lg download-btn"
      >
        <FaDownload className="me-2" />
        Download CV
      </a>
    </div>
  );
}

export default DownloadCV;
