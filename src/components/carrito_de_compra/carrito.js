import React, { useState } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Carrito() {
  const {token} = useParams();
  const {id} = useParams();
  console.log(token+" "+id)
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
    "Token": token
            
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
          onChange={handleChange}
          required
        />
        <label htmlFor="ProductoID">ID del Producto:</label>
        <input
          type="text"
          name="ProductoID"
          value={id}
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
