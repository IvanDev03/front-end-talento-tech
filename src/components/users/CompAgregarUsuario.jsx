import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const URL = "https://backend-node-talento-tech-1.onrender.com/api/usuario";
const URLLocal = "http://localhost:3000/api/usuario";

const CompAgregarUsuario = () => {
  const navigate = useNavigate();
  const [nombreUsuario, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");


  const agregarUsuario = async (e) => {
    e.preventDefault();
try {
  await axios.post(
    URL,
    {
      nombreUsuario: nombreUsuario,
      email: email,
      contrasena: contrasena,
    
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  navigate("/usuario");
} catch (error) {
  console.log(error);
}
    
  };

  return (
    <div className="container">
      <h3> Formulario Guardar Usuario</h3>
      <form onSubmit={agregarUsuario}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            value={nombreUsuario}
            onChange={(e) => setNombre(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">contraseña</label>
          <input
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            type="password"
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

export default CompAgregarUsuario;
