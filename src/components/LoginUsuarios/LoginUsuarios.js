import React, { useState } from 'react';
import Axios from 'axios';

const LoginUsuarios = () => {
  const [formData, setFormData] = useState({
    CorreoElectronico: '',
    Clave: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post('http://localhost:3000/api/login', formData);
      console.log('Respuesta de la API:', response.data);

      if (response.data.Token) {
        setSuccessMessage('Inicio de sesión exitoso.');
        setErrorMessage('');
        // Aquí puedes redirigir al usuario a la página de inicio o realizar otras acciones después del inicio de sesión exitoso
      } else {
        setSuccessMessage('');
        setErrorMessage('Correo electrónico o contraseña incorrectos.');
      }
    } catch (error) {
      console.error('Error al llamar a la API:', error);
      setErrorMessage('No se pudo iniciar sesión.');
    }
  };

  return (
    <div className="login-form">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="CorreoElectronico"
          placeholder="Correo Electrónico"
          value={formData.CorreoElectronico}
          onChange={handleChange}
        />
        <input
          type="password"
          name="Clave"
          placeholder="Contraseña"
          value={formData.Clave}
          onChange={handleChange}
        />
        <button type="submit">Iniciar Sesión</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default LoginUsuarios;
