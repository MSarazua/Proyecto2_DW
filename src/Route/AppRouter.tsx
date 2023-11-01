import React from 'react';
import {Route, Routes } from 'react-router-dom';
import RegistroUsuarios from '../components/RegistroUsuarios/RegistroUsuarios'; // Importa tu componente de RegistroUsuarios
import LoginUsuarios from '../components/LoginUsuarios/LoginUsuarios'; // Importa tu componente de LoginForm


function App() {
  return (
    <Routes>
      <div>
        <Route path="/registro" element={<RegistroUsuarios/>} />
        <Route path="/login" element={<LoginUsuarios />} /> {/* Nueva ruta para el inicio de sesión */}
      </div>
    </Routes>
  );
}

export default App;
