import React from 'react';
import {Route, Routes } from 'react-router-dom';
import RegistroUsuarios from '../components/RegistroUsuarios/RegistroUsuarios';
import LoginUsuarios from '../components/LoginUsuarios/LoginUsuarios';


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
