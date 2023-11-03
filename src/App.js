import logo from './logo.svg';
import './App.css';
import RegistroUsuarios from './components/RegistroUsuarios/RegistroUsuarios ';
import LoginUsuarios from './components/LoginUsuarios/LoginUsuarios';
import PerfilUsuarios from './components/PerfilUsuarios/PerfilUsuarios';
import Carrito from './components/carrito_de_compra/carrito';
import { Route, Routes } from 'react-router-dom';
import MostrarProductos from './components/productos/mostrarproductos';
import RegistrarProductos from './components/RegistrarProductos/registrarProductos';
import EliminarProducto from './components/eliminarProducto/eliminarProducto';
import ModificarProducto from './components/ModificarProducto/modificarProducto';


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<RegistroUsuarios/>} />
      <Route exact path="/login" element={<LoginUsuarios/>} />
      <Route exact path="/perfil/:dpi/:token" element={<PerfilUsuarios/>} />
      <Route exact path="/carrito/:id/:token" element={<Carrito/>}/>
      <Route exact path="/productos/:dpi/:token" element={<MostrarProductos/>}/>
      <Route exact path="/registrarProductos" element={<RegistrarProductos/>}/>
      <Route exact path="/EliminarProductos/:ID/:token" element={<EliminarProducto/>}/>
      <Route exact path="/ModificarProductos" element={<ModificarProducto/>}/>
    </Routes>
  );
}

export default App;
