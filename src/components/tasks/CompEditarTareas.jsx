import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const URL = "https://backend-node-talento-tech-1.onrender.com/api/tareas";
const URLLocal = "http://localhost:3000/api/tareas";

const CompEditarTareas = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [responsable, setResponsable] = useState("");
  const [estado, setEstado] = useState("");
  const [fechaCreacion, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const { id } = useParams();

  const editarTarea = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${URL}/${id}`, {
        nombre: nombre,
        responsable: responsable,
        estado: estado,
        fechaCreacion: fechaCreacion,
        descripcion: descripcion,
      });
      navigate("/tareas");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTareaByID();
  }, [id]);

  const getTareaByID = async () => {
    const response = await axios.get(`${URL}/${id}`);
    setNombre(response.data.nombre);
    setResponsable(response.data.responsable);
    setEstado(response.data.estado);
    setFecha(response.data.fechaCreacion);
    setDescripcion(response.data.descripcion);
  };

  return (
    <div className="container">
      <h3> Formulario Editar Tareas</h3>
      <form onSubmit={editarTarea}>

        <div className="mb-3 ">
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

export default CompEditarTareas;
