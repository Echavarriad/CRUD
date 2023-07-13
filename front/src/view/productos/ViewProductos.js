import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function ViewProductos() {
  const [producto, setProducto] = useState({
    nombre: "",
    descripcion: "",
    precio: 0,
  });

  const { id } = useParams();

  useEffect(() => {
    loadProductos();
  }, []);

  const loadProductos = async () => {
    const resultado = await axios.get(`http://localhost:8080/producto/${id}`);
    setProducto(resultado.data);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rouded p-4 mt-2 shadow">
          <h1 className="text-center m-4">Detalles de Producto</h1>
          <div className="card">
            <div className="card-header">
              <h3>Detalles de producto</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item m-1">
                  <b>Nombre: </b>
                  <b>{producto.nombre}</b>
                </li>
                <li className="list-group-item m-1">
                  <b>Descripción: </b>
                  <b>{producto.descripcion}</b>
                </li>
                <li className="list-group-item m-1">
                  <b>Precio: </b>
                  <b>{producto.precio}</b>
                </li>
              </ul>
            </div>
            <Link className="btn btn-success m-2" to="/">
              Volver
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
