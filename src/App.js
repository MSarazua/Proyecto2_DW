import logo from './logo.svg';
import './App.css';
import RegistroUsuarios from './components/RegistroUsuarios/RegistroUsuarios ';
import LoginUsuarios from './components/LoginUsuarios/LoginUsuarios';
import PerfilUsuarios from './components/PerfilUsuarios/PerfilUsuarios';
import Carrito from './components/carrito_de_compra/carrito';
import { Route, Routes } from 'react-router-dom';
import MostrarProductos from './components/productos/mostrarproductos';


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<RegistroUsuarios/>} />
      <Route exact path="/login" element={<LoginUsuarios/>} />
      <Route exact path="/perfil/:dpi/:token" element={<PerfilUsuarios/>} />
      <Route exact path="/carrito" element={<Carrito/>}/>
      <Route exact path="/productos" element={<MostrarProductos/>}/>
    </Routes>
  );
}

export default App;
