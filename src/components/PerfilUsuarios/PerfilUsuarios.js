import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';

const PerfilUsuarios = () => {
const { DPI } = useParams();
const location = useLocation();
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

        const response = await Axios.get(`http://localhost:3000/api/perfil/${dpi}`, config);
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
    <div>
      <h2>Perfil de Usuario</h2>
      <p>DPI: {user.DPI}</p>
      <p>Nombres: {user.Nombres}</p>
      {/* Agrega más campos según la estructura de tu usuario */}
    </div>
  );
};

export default PerfilUsuarios;
