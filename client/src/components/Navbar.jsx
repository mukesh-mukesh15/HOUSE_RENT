import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const token = localStorage.getItem("adminToken");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: 'linear-gradient(90deg, rgba(2, 45, 55, 0.98), rgba(0, 183, 173, 0.18))' }}>
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="Logo"
            width="40"
            height="40"
            className="me-2"
            style={{ objectFit: 'contain' }}
          />
          <span className="text-white fw-bold">Venus Property Group</span>
        </Link>

        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Rent</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/services">Services</Link>
            </li>
            {/* 📞 Phone Number - Always visible */}
            <li className="nav-item ms-3">
              <a className="nav-link fw-bold" style={{ color: "#FFD700" }} href="mailto:mukesh6380144020@gmail.com">
                ✉️ mukesh6380144020@gmail.com
              </a>
            </li>
            {!token ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/admin/login">Login</Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <button onClick={handleLogout} className="nav-link text-white" style={{ background: "none", border: "none" }}>
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;