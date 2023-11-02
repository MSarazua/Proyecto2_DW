import React, { useState, useEffect} from 'react';
import Axios from 'axios';
import './mostrarProductos.css'; 

export default function MostrarProductos() {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Realizar la solicitud GET a la API para obtener todos los productos
    Axios.get('http://localhost:3000/api/Productos', {
      headers: {
    "Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiIxMSIsImlhdCI6MTY5ODk0MjA2MiwiZXhwIjoxNjk4OTQ1NjYyfQ.vCShYd8KLOQ0MIv3AiZg9ji681cDISdIkVlJkqYCN4Q"
    // Reemplaza 'tu-token-aqui' con tu token real
      }
    })
      .then(response => {
        setProductos(response.data);  // Almacena los productos en el estado
      })
      .catch(error => {
        console.error('Error al llamar a la API:', error);
      });
  }, []);
  

  return (
    <div>
    <h1>Productos disponibles</h1>
    <ul className="product-list">
      {productos.map(producto => (
        <li className="product-item" key={producto.id}>
          <img className="product-image" src={producto.Imagen} alt={producto.Nombre} />
          <div className="product-name">{producto.Nombre}</div>
          <div className="product-brand">Marca: {producto.Marca}</div>
          <div className="product-price">${producto.PrecioDescuento}</div>
          <button className="add-to-cart">Agregar al Carrito</button>
        </li>
      ))}
    </ul>
  </div>
  );
}
