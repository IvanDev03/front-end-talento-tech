import React from "react";

const Menu = () => {
  return (
    <div className="container">
      <nav className="navbar fixed-top d-flex flex-wrap justify-content-center py-1 mb-3 border-bottom">
        <a
          href="/"
          className="d-flex align-items-lg-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <span className="fs-4 p-3">Website</span>
        </a>

        <ul className="nav nav-pills">
            <li className="nav-item"><a href="/" className="nav-link">Inicio</a></li>
            <li className="nav-item"><a href="/tareas" className="nav-link px-10">Tareas</a></li>
            <li className="nav-item"><a href="/usuario" className="nav-link ">Usuarios</a></li>
        </ul>
      </nav>
    </div>
  );
};
export default Menu;