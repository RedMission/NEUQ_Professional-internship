package com.duo.service;

import com.duo.entity.TProduct;

import java.util.List;

public interface IProductService {
    List<TProduct> getList();

    TProduct getProductById(Long id);

    void editProductById(TProduct tProduct);

    void delProductById(Long id);


    void addProduct(TProduct tProduct);
}
