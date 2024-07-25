import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const URL = "https://backend-node-talento-tech-1.onrender.com/api/usuario";
const URLLocal = "http://localhost:3000/api/usuario";
const CompMostrarUsuarios = () => {
  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    getUsuarios();
  }, []);

  const getUsuarios = async () => {
    const response = await axios.get(URL);
    setUsuario(response.data);
  };

  const deleteUsuario = async (id) => {
    await axios.delete(`${URL}/${id}`);
    getUsuarios();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <table className="table">
            <thead className="tablehebg">
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Contraseña</th>
              </tr>
            </thead>
            <tbody>
              {usuario.map((usuario, index) => (
                <tr key={index}>
                  <td>{usuario.nombreUsuario}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.contrasena}</td>
                  <td>
                    <Link
                      to={`/usuario/editar/${usuario._id}`}
                      className="btn btn-success mt-2 mb-2"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteUsuario(usuario._id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-center">
            <Link to="/usuario/agregar" className="btn btn-primary mt-2 mb-2  ">
              Agregar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompMostrarUsuarios;
