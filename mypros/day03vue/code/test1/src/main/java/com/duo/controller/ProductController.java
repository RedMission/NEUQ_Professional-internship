package com.duo.controller;


import com.duo.entity.TProduct;
import com.duo.service.IProductService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Date;
import java.util.List;

@Controller
@RequestMapping("product")
public class ProductController {

    @Autowired
    private IProductService productService;

    @RequestMapping("list")
    @ResponseBody
    public List<TProduct> getList(){
        return productService.getList();
    }

    @RequestMapping("getProductById")
    @ResponseBody
    public TProduct getProductById(Long id){
        return productService.getProductById(id);
    }

    @RequestMapping(value="editproduct",method = RequestMethod.POST)
    @ResponseBody
    public String editProductById(TProduct tProduct){

        productService.editProductById(tProduct);


        return "success";
    }


    @RequestMapping(value="delpro",method = RequestMethod.GET)
    @ResponseBody
    public String delProductById(Long id){

        productService.delProductById(id);


        return "success";
    }

    @RequestMapping(value="addproduct", method = RequestMethod.POST)
    @ResponseBody
    public String addProduct(TProduct tProduct){
        tProduct.setCreateTime(new Date());
        tProduct.setCreateUser(1L);
        tProduct.setTypeId(1L);
        tProduct.setTypeName("手机");
        tProduct.setFlag(true);
        tProduct.setImages("d:/1.jpg");
        tProduct.setSalePoint("高清");
        tProduct.setSalePrice(8299L);
        tProduct.setUpdateTime(new Date());
        tProduct.setUpdateUser(1L);
        productService.addProduct(tProduct);
        return "success";
    }


    /**
     * 获得分页对象，里面封装了分页需要用到的所有信息
     * @param pageNum  当前是第几页
     * @param pageSize 当前页一共显示多少条记录
     * @return
     */
    @RequestMapping(value="pageInfo",method = RequestMethod.GET)
    @ResponseBody
    public PageInfo<TProduct> getPageInfo(int pageNum,int pageSize){

        //1.通过调用PageHelper的静态方法开始获取分页数据
        //指定当前是第几页， 以及每页显示的记录条数
        PageHelper.startPage(pageNum,pageSize);

        //2.获得所有的商品记录
        List<TProduct> list = productService.getList();

        //3.获得当前分页对象
        PageInfo<TProduct> pageInfo = new PageInfo<TProduct>(list);




        return pageInfo;
    }


















//    @RequestMapping(value="pageInfo",method = RequestMethod.GET)
//    @ResponseBody
//    public PageInfo<TProduct> getPageInfo(int pageNum,int pageSize){
//
//        PageHelper.startPage(pageNum,pageSize);
//
//        List<TProduct> list = productService.getList();
//
//        PageInfo<TProduct> pageInfo = new PageInfo<TProduct>(list,4);
//
//        return pageInfo;
//
//
//    }













}
