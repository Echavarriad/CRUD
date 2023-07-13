import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditProductos() {
  let navigation = useNavigate();
  const [producto, setProducto] = useState({
    nombre: "",
    descripcion: "",
    precio: 0,
  });

  const { id } = useParams();

  const onChangeInput = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadProductos();
  }, []);

  const submite = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/producto/${id}`, producto);
    navigation("/");
  };

  const loadProductos = async () => {
    const resultado = await axios.get(`http://localhost:8080/producto/${id}`);
    setProducto(resultado.data);
  };
  const { nombre, descripcion, precio } = producto;
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rouded p-4 mt-2 shadow">
          <h1 className="text-center m-4">Editar Productos</h1>
          <form onSubmit={(e) => submite(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Nombre
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Ingresar nombre de producto"
                name="nombre"
                value={nombre}
                onChange={(e) => onChangeInput(e)}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Descripción
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Ingresar Descripción de producto"
                name="descripcion"
                value={descripcion}
                onChange={(e) => onChangeInput(e)}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Precio
              </label>
              <input
                type={"number"}
                className="form-control"
                placeholder="Ingresar precio de producto"
                name="precio"
                value={precio}
                onChange={(e) => onChangeInput(e)}
              ></input>
            </div>
            <button type="submite" className="btn btn-outline-success mx-2">
              Editar
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancelar
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
