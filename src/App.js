import logo from './logo.svg';
import './App.css';
import RegistroUsuarios from './components/RegistroUsuarios/RegistroUsuarios ';
import LoginUsuarios from './components/LoginUsuarios/LoginUsuarios';
import PerfilUsuarios from './components/PerfilUsuarios/PerfilUsuarios';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path="/registro" element={<RegistroUsuarios/>} />
      <Route exact path="/login" element={<LoginUsuarios/>} />
      <Route exact path="/perfil/:dpi/:token" element={<PerfilUsuarios/>} />
    </Routes>
  );
}

export default App;
