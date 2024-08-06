package com.security.template.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.security.template.model.Orders;
import com.security.template.model.Product;
import com.security.template.model.User;
import com.security.template.repo.OrderRepo;
import com.security.template.repo.ProductRepo;
import com.security.template.repo.UserRepo;


@Service
public class OrderService {
    @Autowired
    private UserRepo ur;

    @Autowired
    private ProductRepo pr;

    @Autowired
    private OrderRepo or;
     public Orders createOrder(Long userId, Long productId, String userAddress, String payMethod) {
        User user = ur.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        Product product = pr.findById(productId).orElseThrow(() -> new RuntimeException("Product not found"));

        Orders order = new Orders();
        order.setUser(user);
        order.setProduct(product);
        order.setUserAddress(userAddress);
        order.setPayMethod(payMethod);
        order.setOrderConfirmed(false); // Default value for new orders

        return or.save(order);
    }
}