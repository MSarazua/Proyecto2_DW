import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginUsuarios.css'; // Importa tu archivo CSS

const LoginUsuarios = () => {
  const [formData, setFormData] = useState({
    CorreoElectronico: '',
    Clave: '',
  });

  const navigate = useNavigate();

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

      if (response.data.Token) {
        setSuccessMessage('Inicio de sesión exitoso.');
        setErrorMessage('');
        const DPI = response.data.DPI;
        const token = response.data.Token;

        navigate(`/perfil/${DPI}/${token}`, { state: { token, dpi: DPI } });
        console.log(token)

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
      <h2 className='text_h2'>Iniciar Sesión</h2>
      <form className='formulario' onSubmit={handleSubmit}>
        <input
          className='form_input'
          type="email"
          name="CorreoElectronico"
          placeholder="Correo Electrónico"
          value={formData.CorreoElectronico}
          onChange={handleChange}
        />
        <input
          className='form_input'
          type="password"
          name="Clave"
          placeholder="Contraseña"
          value={formData.Clave}
          onChange={handleChange}
        />
        <button className='btn_registro' type="submit">Iniciar Sesión</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default LoginUsuarios;
