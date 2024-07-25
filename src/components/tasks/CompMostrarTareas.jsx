import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const URL = "https://backend-node-talento-tech-1.onrender.com/api/tareas";
const URLLocal = "http://localhost:3000/api/tareas";
const CompMostrarTareas = () => {
  const [tarea, setTarea] = useState([]);

  useEffect(() => {
    getTareas();
  }, []);

  const getTareas = async () => {
    const response = await axios.get(URL);
    setTarea(response.data);
  };

  const deleteTarea = async (id) => {
    await axios.delete(`${URL}/${id}`);
    getTareas();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <table className="table">
            <thead className="tablehebg">
              <tr>
                <th>Nombre</th>
                <th>Responsable</th>
                <th>Estado</th>
                <th>Fecha de creacion</th>
                <th>Descripcion</th>
              </tr>
            </thead>
            <tbody>
              {tarea.map((tarea, index) => (
                <tr key={index}>
                  <td>{tarea.nombre}</td>
                  <td>{tarea.responsable}</td>
                  <td>{tarea.estado}</td>
                  <td>{tarea.fechaCreacion}</td>
                  <td>{tarea.descripcion}</td>
                  <td>
                    <Link
                      to={`/tareas/editar/${tarea._id}`}
                      className="btn btn-success mt-2 mb-2"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteTarea(tarea._id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>       
          </table>
          <div className="text-center">
              <Link
                to="/tareas/agregar"
                className="btn btn-primary mt-2 mb-2  "
              >
                Agregar
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
};
export default CompMostrarTareas;
