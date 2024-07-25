import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CompMostrarTareas from "./components/tasks/CompMostrarTareas.jsx";
import CompAgregarTareas from "./components/tasks/CompAgregarTareas.jsx";
import CompEditarTareas from "./components/tasks/CompEditarTareas.jsx";
import Home from "./components/Home";
import Menu from './components/Menu.jsx'
import Footer from './components/Footer.jsx'
import CompMostrarUsuarios from "./components/users/CompMostrarUsuarios.jsx";
import CompAgregarUsuario from "./components/users/CompAgregarUsuario.jsx";
import CompEditarUsuario from "./components/users/CompEditarUsuario.jsx";


function App() {
  return (
    <>
     <Menu />
      <div className="app">
        <Router>
          <Routes>
            <Route path="/tareas"exact element= {<CompMostrarTareas/>} />
            <Route path="/tareas/agregar"exact element= {<CompAgregarTareas/>} />
            <Route path="/tareas/editar/:id"exact element= {<CompEditarTareas/>} />
            <Route path="/"exact element= {<Home/>} />
            <Route path="/usuario"exact element= {<CompMostrarUsuarios/>} />
            <Route path="/usuario/agregar"exact element= {<CompAgregarUsuario/>} />
            <Route path="/usuario/editar/:id"exact element= {<CompEditarUsuario/>} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
