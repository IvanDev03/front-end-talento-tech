import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const URL = "https://backend-node-talento-tech-1.onrender.com/api/tareas";
const URLLocal = "http://localhost:3000/api/tareas";

const CompAgregarTareas = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [responsable, setResponsable] = useState("");
  const [estado, setEstado] = useState("");
  const [fechaCreacion, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const agregarTarea = async (e) => {
    e.preventDefault();
try {
  await axios.post(
    URL,
    {
      nombre: nombre,
      responsable: responsable,
      estado: estado,
      fechaCreacion: fechaCreacion,
      descripcion: descripcion,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  navigate("/tareas");
} catch (error) {
  console.log(error);
}
    
  };

  return (
    <div className="container">
      <h3> Formulario Guardar Tareas</h3>
      <form onSubmit={agregarTarea}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Responsable</label>
          <input
            value={responsable}
            onChange={(e) => setResponsable(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Estado</label>
          <input
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha de creacion</label>
          <input
            value={fechaCreacion}
            onChange={(e) => setFecha(e.target.value)}
            type="date"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Descripcion</label>
          <input
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            type="boolean"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default CompAgregarTareas;
