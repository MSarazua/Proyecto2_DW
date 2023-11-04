import React, { useState } from 'react';
import Axios from 'axios'; // Asegúrate de importar Axios
import { Link } from 'react-router-dom'; 
import './eliminarProductos.css'; // Importa tu archivo CSS
import { useParams } from 'react-router-dom';

const EliminarProducto = () => {

  const [formData, setFormData] = useState({
    Nombre: '',
    Marca: '',
    Disponibilidad: '',
    Descuento: '',
    Precio: '',
    Imagen: '',
    Descripcion: '',
    Categorias:'',
    Habilitado: '',
  });

  const resetForm = () => {
    setFormData({
        Nombre: '',
        Marca: '',
        Disponibilidad: '',
        Descuento: '',
        Precio: '',
        Imagen: '',
        Descripcion: '',
        Categorias:'',
        Habilitado: '',
    });
  };

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const { token} = useParams();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log(token)
    try {
        // Realizar la llamada a la API utilizando Axios
        const response = await Axios.delete(`https://proyecto-1-jose-alexander-maria-sarazua.onrender.com/api//Producto/1`, formData, {
          headers: {
          "Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiIxMSIsImlhdCI6MTY5OTA0MzU3NywiZXhwIjoxNjk5MDQ3MTc3fQ.cQPntJWYIv4rdvbtAPyodUtUrB0i1_wB62XZvAtiJ2I"
              
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
    <div className="registro-usuarios">
      <h2 className='text_h2'>Eliminar Productos</h2>
      <form onSubmit={handleSubmit}>
        <input
        className='form_input'
          type="text"
          name="Nombre"
          value={formData.Nombre}
          onChange={handleChange}
        /><br/>
        <input
        className='form_input'
          type="text"
          name="Marca"
          placeholder="Marca"
          value={formData.Marca}
          onChange={handleChange}
        /><br/>
        <input
        className='form_input'
          type="number"
          name="Disponibilidad"
          placeholder="Disponibilidad"
          value={formData.Disponibilidad}
          onChange={handleChange}
        /><br/>
        <input
          type="number"
          name="Descuento"
          placeholder="Descuento"
          className='form_input'
          value={formData.Descuento}
          onChange={handleChange}
        /><br/>
        <input
          className='form_input'
          type="number"
          name="Precio"
          placeholder="Precio"
          value={formData.Precio}
          onChange={handleChange}
        /><br/>
        <input
        className='form_input'
          type="text"
          name="Imagen"
          placeholder="URL de imagen"
          value={formData.Imagen}
          onChange={handleChange}
        /><br/>

        <textarea
        className='form_input'
          name="Descripcion"
          placeholder="Descripcion"
          value={formData.Descripcion}
          onChange={handleChange}
        /><br/>
        <input
         className='form_input'
          type="text"
          name="Categorias"
          placeholder="Categorias"
          value={formData.Categorias}
          onChange={handleChange}
        /><br/>

        <label htmlFor="Habilitado">Habilitado:</label>
        <select name="Habilitado" value={formData.Habilitado} onChange={handleChange}>
          <option value="true">Habilitado</option>
          <option value="false">Deshabilitado</option>
        </select>

        <button type="submit">Eliminar Producto</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default EliminarProducto;
