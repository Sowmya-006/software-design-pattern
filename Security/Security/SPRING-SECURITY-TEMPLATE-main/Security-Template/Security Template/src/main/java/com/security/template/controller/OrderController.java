package com.security.template.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.security.template.model.Orders;
import com.security.template.service.OrderService;


@RestController
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping("/post")
    public Orders createOrder(@RequestBody OrderRequest orderRequest) {
        return orderService.createOrder(
            orderRequest.getUserId(),
            orderRequest.getProductId(),
            orderRequest.getUserAddress(),
            orderRequest.getPayMethod()
        );
    }
}