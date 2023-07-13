package com.Echavarriad.backend.controller;

import com.Echavarriad.backend.exception.ProductoNoEncontradoException;
import com.Echavarriad.backend.model.Producto;
import com.Echavarriad.backend.repository.ProductoRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.support.Repositories;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class ProductoController {

    @Autowired

    private ProductoRepository productoRepository;

    @PostMapping("/producto")
    Producto newProducto(@RequestBody Producto newProducto){
        return productoRepository.save(newProducto);
    }

    @GetMapping("/productos")
    List<Producto> getAllProductos(){
        return productoRepository.findAll();
    }
    @GetMapping("/producto/{id}")
    Producto getProductoById(@PathVariable Long id){
        return  productoRepository.findById(id)
                .orElseThrow(()-> new ProductoNoEncontradoException(id));
    }

    @PutMapping("/producto/{id}")
    Producto updateProducto(@RequestBody Producto newProducto, @PathVariable Long id){
        return productoRepository.findById(id)
                .map(producto -> {
                    producto.setNombre(newProducto.getNombre());
                    producto.setDescripcion(newProducto.getDescripcion());
                    producto.setPrecio(newProducto.getPrecio());
                    return productoRepository.save(producto);
                }).orElseThrow(()-> new ProductoNoEncontradoException(id));
    }

    @DeleteMapping("/producto/{id}")
    String deletProducto(@PathVariable Long id){
        if(!productoRepository.existsById(id)){
            throw new ProductoNoEncontradoException(id);
        }
        productoRepository.deleteById(id);
        return "El producto con el id "+id+" fue eliminado correctamente";
    }
}
