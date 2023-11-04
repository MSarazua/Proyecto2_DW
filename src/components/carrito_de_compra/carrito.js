import React, { useState } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import './carrito.css'; // Importa tu archivo CSS


export default function Carrito() {
  const {token} = useParams();
  const { price } = useParams();
  const [formData, setFormData] = useState({
    ProductoID: "654586e42038b1404128b478",
    Cantidad: '1',
    userId: "6541d00bc864cde53d2e4df5",
  });

  const resetForm = () => {
    setFormData({
      ProductoID: '',
      Cantidad: '',
      userId: '',
    });
  };

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      // Realizar la llamada a la API utilizando Axios
      const response = await Axios.post('https://proyecto-1-jose-alexander-maria-sarazua.onrender.com/api/carrito/', formData, {
        headers: {
          "token": token
        }
      });
      console.log('Respuesta de la API:', response.data);
      setSuccessMessage('Añadido al carrito exitosamente');
      resetForm();
    } catch (error) {
      console.error('Error al llamar a la API:', error);
      setErrorMessage('Error al agregar al carrito. Inténtelo de nuevo.');
    }
  };

  return (
    <div className='cart-container'>
      <h1>Agregar al carrito</h1>
      <form className="cart-form" onSubmit={handleSubmit}>
        <input
          type="hidden"
          name="userId"
          value="6541d00bc864cde53d2e4df5"
          onChange={handleChange}
          required
        />
        <input
          type="hidden"
          name="ProductoID"
          value="654586e42038b1404128b478"
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="Cantidad">Cantidad:</label>
        <input
          type="number"
          name="Cantidad"
          value={formData.Cantidad}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="number"
          name="Precio"
          value={price}
          onChange={handleChange}
          required
        />
        <button type="submit">Agregar al Carrito</button>
      </form>
    </div>
  );
}
