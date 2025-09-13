package com.example.elecbill.repository;

import java.util.List;


import com.example.elecbill.model.CustomerEntity;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<CustomerEntity, Integer>{
	List<CustomerEntity> findByEmailAndPassword(String Email, String password);

	CustomerEntity findCustomerByEmail(String email);
	
	
}
