import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand">Aplication</a>
          <Link className="btn btn-outline-light" to="/addproducto">
            Agregar Producto
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page">
                Home
              </a>
              <a className="nav-link">Features</a>
              <a className="nav-link">Pricing</a>
              <a
                className="nav-link disabled"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
