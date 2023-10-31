import React from 'react';
import {Route, Routes } from 'react-router-dom';
import RegistroUsuarios from '../components/RegistroUsuarios/RegistroUsuarios '; // Importa tu componente de RegistroUsuarios

function App() {
  return (
    <Routes>
      <div>
        <Route path="/registro" element={<RegistroUsuarios/>} />
      </div>
    </Routes>
  );
}

export default App;
