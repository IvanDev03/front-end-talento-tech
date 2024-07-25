import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const URL = "https://backend-node-talento-tech-1.onrender.com/api/usuario";
const URLLocal = "http://localhost:3000/api/usuario";

const CompEditarUsuario = () => {
  const navigate = useNavigate();
  const [nombreUsuario, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");

  const { id } = useParams();

  const editarUsuario = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${URL}/${id}`, {
        nombreUsuario: nombreUsuario,
        email: email,
        contrasena: contrasena,
      });
      navigate("/usuario");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUsuarioByID();
  }, [id]);

  const getUsuarioByID = async () => {
    const response = await axios.get(`${URL}/${id}`);
    setNombre(response.data.nombreUsuario);
    setEmail(response.data.email);
    setContrasena(response.data.contrasena);
  };

  return (
    <div className="container">
      <h3> Formulario Editar Usuario</h3>
      <form onSubmit={editarUsuario}>
        <div className="mb-3 ">
          <label className="form-label">Nombre</label>
          <input
            value={nombreUsuario}
            onChange={(e) => setNombre(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            type="text"
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

export default CompEditarUsuario;
