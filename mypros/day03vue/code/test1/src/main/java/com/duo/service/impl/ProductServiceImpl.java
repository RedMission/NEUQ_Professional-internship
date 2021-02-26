package com.duo.service.impl;

import com.duo.entity.TProduct;
import com.duo.mapper.TProductMapper;
import com.duo.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements IProductService {

    @Autowired
    private TProductMapper tProductMapper;


    public List<TProduct> getList() {
        return tProductMapper.selectProducts();
    }

    public TProduct getProductById(Long id) {
        return tProductMapper.selectByPrimaryKey(id);
    }

    public void editProductById(TProduct tProduct) {
        tProductMapper.updateByPrimaryKey(tProduct);
    }

    public void delProductById(Long id) {
        tProductMapper.deleteByPrimaryKey(id);
    }

    public void addProduct(TProduct tProduct) {
        tProductMapper.insert(tProduct);
    }


}
