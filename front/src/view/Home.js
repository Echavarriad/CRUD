import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [productos, setProductos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadProductos();
  }, []);
  const loadProductos = async () => {
    const resultado = await axios.get("http://localhost:8080/productos");
    setProductos(resultado.data);
  };

  const deleteProduco = async (id) => {
    await axios.delete(`http://localhost:8080/producto/${id}`);
    loadProductos();
  };
  return (
    <div>
      <div className="container">
        <div className="py-4">
          <table className="table table-striped border shadow">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>
              {productos
                ? productos.map((producto, index) => (
                    <tr>
                      <th scope="row" key={index}>
                        {index + 1}
                      </th>
                      <td>{producto.nombre}</td>
                      <td>{producto.descripcion}</td>
                      <td>{producto.precio}</td>
                      <td>
                        <Link
                          className="btn btn-info mx-2"
                          to={`/verproducto/${producto.id}`}
                        >
                          Ver
                        </Link>
                        <Link
                          className="btn btn-success mx-2"
                          to={`/editproducto/${producto.id}`}
                        >
                          Editar
                        </Link>
                        <button
                          className="btn btn-danger mx-2"
                          onClick={() => deleteProduco(producto.id)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
