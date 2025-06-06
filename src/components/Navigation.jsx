import React from "react";
import { Link } from "react-router-dom";
import "../css/Navigation.css";
import useStore from "../store/useStore";
import { Button } from "react-bootstrap";

const Navigation = () => {
  const { darkMode, cambiarColor } = useStore();

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        darkMode ? "navigation dark" : "navigation light"
      }`}
    >
      <div className="container-fluid justify-content-center">
        <Link
          to="/"
          className={`navbar-brand brand-name ${
            darkMode ? "text-light" : "text-dark"
          } `}
        >
          Karen
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-4">
            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-link custom-link ${
                  darkMode ? "text-light" : "text-dark"
                } `}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className={`nav-link custom-link ${
                  darkMode ? "text-light" : "text-dark"
                } `}
              >
                Proyectos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={`nav-link custom-link ${
                  darkMode ? "text-light" : "text-dark"
                } `}
              >
                Contáctame
              </Link>
            </li>
            <Button variant={darkMode ? "light" : "dark"}onClick={cambiarColor}>
              {darkMode ? "Modo Oscuro" : "Modo Claro"}
            </Button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
