package com.security.template.controller;


import lombok.Builder;

@Builder
public class OrderRequest {
    private Long userId;
    private Long productId;
    private String userAddress;
    private String payMethod;
    public Long getUserId() {
        return userId;
    }
    public void setUserId(Long userId) {
        this.userId = userId;
    }
    public Long getProductId() {
        return productId;
    }
    public void setProductId(Long productId) {
        this.productId = productId;
    }
    public String getUserAddress() {
        return userAddress;
    }
    public void setUserAddress(String userAddress) {
        this.userAddress = userAddress;
    }
    public String getPayMethod() {
        return payMethod;
    }
    public void setPayMethod(String payMethod) {
        this.payMethod = payMethod;
    }
  

    
}