package com.security.template.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.security.template.model.Orders;


public interface OrderRepo extends JpaRepository<Orders, Long> {

}