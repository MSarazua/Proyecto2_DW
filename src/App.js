import logo from './logo.svg';
import './App.css';
import RegistroUsuarios from './components/RegistroUsuarios/RegistroUsuarios '; // Importa tu componente de registro
import LoginUsuarios from './components/LoginUsuarios/LoginUsuarios'; // Importa tu componente de LoginUsuarios
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path="/registro" element={<RegistroUsuarios/>} />
      <Route exact path="/login" element={<LoginUsuarios/>} />
    </Routes>
  );
}

export default App;
