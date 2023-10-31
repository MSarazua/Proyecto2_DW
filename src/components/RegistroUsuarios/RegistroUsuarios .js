import React, { useState } from 'react';
import './RegistroUsuarios.css';

const RegistroUsuarios = () => {
  const [formData, setFormData] = useState({
    DPI: '',
    Nombres: '',
    Apellidos: '',
    FechaNacimiento: '',
    Clave: '',
    ValidacionClave: '',
    DireccionEntrega: '',
    NIT: '',
    NúmeroTelefonico: '',
    CorreoElectronico: '',
    Rol: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Realiza validaciones aquí (correo electrónico, NIT, contraseña, etc.)
    // Realiza la llamada a la API para registrar al usuario
    try {
      // Aquí deberías hacer la llamada a la API con Axios u otra biblioteca
      // y manejar las respuestas y errores según lo necesites
    } catch (error) {
      // Manejar errores de la llamada a la API
    }
  };

  return (
    <div className="registro-usuarios">
      <h2>Registro de Usuarios</h2>
      <form onSubmit={handleSubmit}>
        {/* Campos del formulario */}
        <input
          type="number"
          name="DPI"
          placeholder="DPI"
          value={formData.Nombres}
          onChange={handleChange}
        />
        <input
          type="text"
          name="Nombres"
          placeholder="Nombres"
          value={formData.Nombres}
          onChange={handleChange}
        />
        {/* Otros campos del formulario aquí */}
        <button type="submit">Registrarse</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default RegistroUsuarios; 
