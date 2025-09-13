package com.example.elecbill.controller;

import java.io.IOException;

import java.util.List;
import java.util.Optional;

import com.example.elecbill.model.BillEntity;
import com.example.elecbill.model.CustomerEntity;
import com.example.elecbill.repository.CustomerRepository;
import com.example.elecbill.service.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/electricity")
public class CustomerController {
	
	@Autowired
	private CustomerRepository customerRepo;
	   private CustomerService customerService;

	
	@PutMapping("/change/{cId}")
	public CustomerEntity updateCustomer(@PathVariable("cId") int cId, @RequestBody CustomerEntity updatedCustomer) {
	    CustomerEntity existingCustomer = customerRepo.findById(cId).orElse(null);

	    if (existingCustomer != null) {
	        if (updatedCustomer.getEmail() != null) {
	            existingCustomer.setEmail(updatedCustomer.getEmail());
	        }
	        if (updatedCustomer.getPhone() != null) {
	            existingCustomer.setPhone(updatedCustomer.getPhone());
	        }
	        if (updatedCustomer.getAddress() != null) {
	            existingCustomer.setAddress(updatedCustomer.getAddress());
	        }
	        if (updatedCustomer.getName() != null) {
	            existingCustomer.setName(updatedCustomer.getName());
	        }
	        // Update any other fields individually

	        return customerRepo.save(existingCustomer);
	    } else {
	        return null;
	    }
	}

	
	@GetMapping("/")
	public List<CustomerEntity> getAllCustomers() {
	    return customerRepo.findAll();
	}
	@GetMapping("/id/{cId}")
	public ResponseEntity<CustomerEntity> getCustomerById(@PathVariable("cId") int cId) {
	    CustomerEntity customer = customerRepo.findById(cId).orElse(null);
	    if (customer != null) {
	        return ResponseEntity.ok(customer);
	    } else {
	        return ResponseEntity.notFound().build();
	    }
	}

	  
//    @GetMapping("/email/{email}")
//    public CustomerEntity getCustomerByEmail(@PathVariable String email) {
//        return customerService.getCustomerByEmail(email);
//    }
	
	
	@GetMapping("/{email}")
	public ResponseEntity<CustomerEntity> getCustomerByEmail(@PathVariable String email) {
	    CustomerEntity customer = customerService.getCustomerByEmail(email);
	    if (customer == null) {
	        return ResponseEntity.notFound().build();
	    }
	    return ResponseEntity.ok(customer);
	}






	@PutMapping("/change/{cId}/password")
	public ResponseEntity<CustomerEntity> updateCustomerPassword(@PathVariable("cId") int cId, @RequestBody String passwordJson) {
	    try {
	        // Extract the new password from the JSON string
	        ObjectMapper objectMapper = new ObjectMapper();
	        JsonNode jsonNode = objectMapper.readTree(passwordJson);
	        JsonNode newPasswordNode = jsonNode.get("newPassword");

	        if (newPasswordNode != null && newPasswordNode.isTextual()) {
	            String newPassword = newPasswordNode.asText();

	            Optional<CustomerEntity> optionalCustomer = customerRepo.findById(cId);

	            if (optionalCustomer.isPresent()) {
	                CustomerEntity existingCustomer = optionalCustomer.get();
	                existingCustomer.setPassword(newPassword);
	                CustomerEntity updatedCustomer = customerRepo.save(existingCustomer);
	                return ResponseEntity.ok(updatedCustomer);
	            } else {
	                return ResponseEntity.notFound().build();
	            }
	        } else {
	            return ResponseEntity.badRequest().build();
	        }
	    } catch (IOException e) {
	        e.printStackTrace();
	        return ResponseEntity.badRequest().build();
	    }
	    
	    
	}}