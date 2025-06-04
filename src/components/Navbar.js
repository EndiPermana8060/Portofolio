import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">Endi Permana</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Tentang</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/skills">Skill</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/projects">Proyek</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/contact">Kontak</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/downloadcv">Download CV</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
