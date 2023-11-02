import React from 'react';
import {Route, Routes } from 'react-router-dom';
import LoginUsuarios from '../components/LoginUsuarios/LoginUsuarios';
import RegistroUsuarios from '../components/RegistroUsuarios/RegistroUsuarios ';
import Carrito from '../components/carrito_de_compra/carrito';


function App() {
  return (
    <Routes>
      <div>
        <Route path="/registro" element={<RegistroUsuarios/>} />
        <Route path="/login" element={<LoginUsuarios />} />
        
      </div>
    </Routes>
  );
}

export default App;
