import React, { useState } from 'react';
import Axios from 'axios'; // Asegúrate de importar Axios

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

  const resetForm = () => {
    setFormData({
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
  };

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    // Validación simple de dirección de correo electrónico
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateNIT = (nit) => {
    // Validación simple de NIT (ejemplo: 123456-7)
    return /^\d{6}-\d{1}$/.test(nit);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Realizar las validaciones aquí
    if (!validateEmail(formData.CorreoElectronico)) {
      setErrorMessage('El correo electrónico no es válido.');
      return;
    }

    if (!validateNIT(formData.NIT)) {
      setErrorMessage('El NIT no es válido.');
      return;
    }

    // Realizar la llamada a la API para registrar al usuario
    try {
      // Realizar la llamada a la API utilizando Axios
      const response = await Axios.post('http://localhost:3000/api/registro/10', formData);
      console.log('Respuesta de la API:', response.data);
      setSuccessMessage('Usuario registrado exitosamente.');
      resetForm();
    } catch (error) {
      // Manejar errores de la llamada a la API
      console.error('Error al llamar a la API:', error);
      setErrorMessage('Error al registrar al usuario. Inténtelo de nuevo.');
    }
  };

  return (
    <div className="registro-usuarios">
      <h2>Registro de Usuarios</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="DPI"
          placeholder="DPI"
          value={formData.DPI}
          onChange={handleChange}
        />
        <input
          type="text"
          name="Nombres"
          placeholder="Nombres"
          value={formData.Nombres}
          onChange={handleChange}
        />
        <input
          type="text"
          name="Apellidos"
          placeholder="Apellidos"
          value={formData.Apellidos}
          onChange={handleChange}
        />
        <input
          type="date"
          name="FechaNacimiento"
          placeholder="Fecha de Nacimiento"
          value={formData.FechaNacimiento}
          onChange={handleChange}
        />
        <input
          type="password"
          name="Clave"
          placeholder="Contraseña"
          value={formData.Clave}
          onChange={handleChange}
        />
        <input
          type="password"
          name="ValidacionClave"
          placeholder="Confirmar Contraseña"
          value={formData.ValidacionClave}
          onChange={handleChange}
        />
        <input
          type="text"
          name="DireccionEntrega"
          placeholder="Dirección de Entrega"
          value={formData.DireccionEntrega}
          onChange={handleChange}
        />
        <input
          type="text"
          name="NIT"
          placeholder="NIT"
          value={formData.NIT}
          onChange={handleChange}
        />
        <input
          type="text"
          name="NúmeroTelefonico"
          placeholder="Número Telefónico"
          value={formData.NúmeroTelefonico}
          onChange={handleChange}
        />
        <input
          type="email"
          name="CorreoElectronico"
          placeholder="Correo Electrónico"
          value={formData.CorreoElectronico}
          onChange={handleChange}
        />
        <input
          type="text"
          name="Rol"
          placeholder="Rol"
          value={formData.Rol}
          onChange={handleChange}
        />
        <button type="submit">Registrarse</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default RegistroUsuarios;
