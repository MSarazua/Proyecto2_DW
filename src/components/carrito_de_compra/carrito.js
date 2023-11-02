import React, { useState } from 'react';
import Axios from 'axios';

export default function Carrito() {
  const [formData, setFormData] = useState({
    ProductoID: '',
    Cantidad: '',
    userId:'',
  });

  const resetForm = () => {
    setFormData({
      ProductoID: '',
      Cantidad: '',
      userId:'',
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
      const response = await Axios.post('http://localhost:3000/api/carrito/', formData, {
        headers: {
    "Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiIxMSIsImlhdCI6MTY5ODkzOTk1NiwiZXhwIjoxNjk4OTQzNTU2fQ.MZejE5md9otto4aF1z1MC6oLVQ8PiJhSLR76GDzuE-g"
            
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
      <h1>Agregar al carrito</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="ProductoID">ID del usuario:</label>
        <input
          type="text"
          name="userId"
          value={formData.userId}
          onChange={handleChange}
          required
        />
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
