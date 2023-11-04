import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import './PerfilUsuarios.css'; // Importa tu archivo CSS

const PerfilUsuarios = () => {
const { DPI } = useParams();
const location = useLocation();
console.log(location)
const { token, dpi } = location.state;
const [user, setUser] = useState(null);
const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const tokenUser = `${token}`;
        const config = {
          headers: {
            Token: `${tokenUser}`,
          },
        };

        const response = await Axios.get(`https://proyecto-1-jose-alexander-maria-sarazua.onrender.com/api/perfil/${dpi}`, config);
        setUser(response.data);
      } catch (error) {
        setErrorMessage('No se pudo cargar el perfil del usuario.');
      }
    };

    fetchUserProfile();
  }, [DPI]);

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  if (!user) {
    return <div>Cargando...</div>;
  }

  return (
    <div className='perfil_usuarios'>
      <h2 className='title_h2'>Perfil de Usuario</h2>
      <p className='text_p'>DPI: {user.DPI}</p>
      <p className='text_p'>Nombres: {user.Nombres}</p>
      <p className='text_p'>Apellidos: {user.Apellidos}</p>
      <p className='text_p'>Fecha de nacimiento: {user.FechaNacimiento}</p>
      <p className='text_p'>Direccion de Entrega: {user.DireccionEntrega}</p>
      <p className='text_p'>Nit: {user.NIT}</p>
      <p className='text_p'>Número Telefonico: {user.NúmeroTelefonico}</p>
      <p className='text_p'> Correo Electrónico: {user.CorreoElectronico}</p>
      <Link className='btn_login' to={`/productos/${dpi}/${token}`}>
        Ver producto
      </Link>
    </div>
  );
};

export default PerfilUsuarios;
