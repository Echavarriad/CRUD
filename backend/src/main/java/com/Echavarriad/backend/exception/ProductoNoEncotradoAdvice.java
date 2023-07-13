package com.Echavarriad.backend.exception;

import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class ProductoNoEncotradoAdvice {

    @ResponseBody
    @ExceptionHandler(ProductoNoEncontradoException.class)
    public  Map<String,String> exceptionHander(ProductoNoEncontradoException exception){
        Map<String,String> errorMap = new HashMap<>();
        errorMap.put("Mensaje Error",exception.getMessage());
        return  errorMap;
    }


}
