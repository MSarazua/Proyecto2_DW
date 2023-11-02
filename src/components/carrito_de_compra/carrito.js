import React, { useState } from 'react';
import Axios from 'axios';

export default function Carrito() {
  const [formData, setFormData] = useState({
    ProductoID: '',
    Cantidad: '',
  });

  const resetForm = () => {
    setFormData({
      ProductoID: '',
      Cantidad: '',
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
      const response = await Axios.post('http://localhost:3000/api/carrito', formData, {
        headers: {
          'Authorization': 'Bearer <eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiIxMSIsImlhdCI6MTY5ODg5OTQyNCwiZXhwIjoxNjk4OTAzMDI0fQ.vEl0h5gnoNWAzvlkgdtIkh9K2oRmoyseLjHuNFxW3AU>'
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
    <div>
      <h1>Carrito de compras</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="ProductoID">ID del Producto:</label>
        <input
          type="text"
          name="ProductoID"
          value={formData.ProductoID}
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

        <button type="submit">Agregar al Carrito</button>
      </form>
    </div>
  );
}
