package com.security.template.repo;


import org.springframework.data.jpa.repository.JpaRepository;

import com.security.template.model.Product;

public interface ProductRepo extends JpaRepository<Product,Long>{

    
}