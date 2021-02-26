package com.duo.mapper;

import com.duo.entity.TProduct;

import java.util.List;

public interface TProductMapper {
    int deleteByPrimaryKey(Long id);

    int insert(TProduct record);

    int insertSelective(TProduct record);

    TProduct selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(TProduct record);

    int updateByPrimaryKey(TProduct record);

    List<TProduct> selectProducts();
}
