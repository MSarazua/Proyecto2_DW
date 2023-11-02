import React, { useState } from 'react';
import Axios from 'axios'; // Asegúrate de importar Axio

export default function Carrito() {
    const [formData, setFormData] = useState({
        id: '',
        cantidad: '',
       
       
      });
    
      const resetForm = () => {
        setFormData({
          id: '',
          cantidad: '',
      
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
        // Realizar la llamada a la API para agregar el producto al carrito
        try {
          // Realizar la llamada a la API utilizando Axios
          const response = await Axios.post('http://localhost:3000/api/carrito', formData);
          console.log('Respuesta de la API:', response.data);
          setSuccessMessage('añadido al carrito exitosamente');
          resetForm();
        } catch (error) {
          // Manejar errores de la llamada a la API
          console.error('Error al llamar a la API:', error);
          setErrorMessage('Error al registrar al usuario. Inténtelo de nuevo.');
        }
      };
  return  (
    <div>
        
        <h1>Carrito de compras</h1>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          placeholder="ID"
          value={formData.id}
          onChange={handleChange}
        />
        <input
          type="text"
          name="cantidad"
          placeholder="cantidad"
          value={formData.cantidad}
          onChange={handleChange}
        />

        <button type="submit">Agregar al carrito</button>
      </form>

    </div>

   
  );
  
}
