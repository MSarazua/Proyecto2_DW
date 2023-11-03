import React, { useState, useEffect} from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import './mostrarProductos.css'; 
import { useParams } from 'react-router-dom';

export default function MostrarProductos(props) {

  const [productos, setProductos] = useState([]);
  const { token } = useParams();
  useEffect(() => {
    // Realizar la solicitud GET a la API para obtener todos los productos
    Axios.get('http://localhost:3000/api/Productos', {
      headers: {
    "Token": token
        
    
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
    <p>Variable recibida: {props.variableProp}</p>
    <ul className="product-list">
      {productos.map(producto => (
        <li className="product-item" key={producto.Identificador}>
          <img className="product-image" src={producto.Imagen} alt={producto.Nombre} />
          <div className="product-name">{producto.Nombre}</div>
          <div className="product-brand">Marca: {producto.Marca}</div>
          <div className="product-price">${producto.PrecioDescuento}</div>
          <div className="product-brand">Cantidad en existencia {producto.Disponibilidad}</div>
          <Link className='btn_login' to={`/carrito/${producto._id}/${token}`}>
        Agregar al carrito
      </Link>
          <button className="add-to-cartModificar"><a href="/ModificarProductos">Modificar producto</a></button>
          <button className="add-to-carteliminar"><a href="/EliminarProductos">Eliminar producto</a></button>
          <Link className='btn_login' to={`/EliminarProductos/${producto.Identificador}/${token}`}>
        Eliminar producto
      </Link>
          
        </li>
      ))}
    </ul>
  </div>
  );
}
