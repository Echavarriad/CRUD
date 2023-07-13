import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import Home from "./view/Home";
import AddProductos from "./view/productos/AddProductos";
import EditProductos from "./view/productos/EditProducto";
import ViewProductos from "./view/productos/ViewProductos";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/addproducto" element={<AddProductos />} />
          <Route exact path="/editproducto/:id" element={<EditProductos />} />
          <Route exact path="/verproducto/:id" element={<ViewProductos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
