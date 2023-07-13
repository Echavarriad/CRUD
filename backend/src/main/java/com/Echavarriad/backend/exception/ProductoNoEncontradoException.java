package com.Echavarriad.backend.exception;

public class ProductoNoEncontradoException extends  RuntimeException{

    public ProductoNoEncontradoException(Long id){
        super("No se puede encontrar el producto por el id");
    }
}
