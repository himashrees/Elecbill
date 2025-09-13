package com.example.elecbill.service;



import com.example.elecbill.model.BillEntity;

import com.example.elecbill.model.CustomerEntity;
import com.example.elecbill.repository.BillRepository;
import com.example.elecbill.repository.CustomerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {

    private final CustomerRepository userRepository;
    private final BillRepository billrepository;

    @Autowired
    public CustomerService(CustomerRepository userRepository, BillRepository billrepository) {
        this.userRepository = userRepository;
        this.billrepository = billrepository;
    }

    public CustomerEntity save(CustomerEntity user) {
        // Hash the password using your preferred algorithm
        String hashedPassword = hashPassword(user.getPassword());
        user.setPassword(hashedPassword);

        // Save the user to the database
        return userRepository.save(user);
    }

    public CustomerEntity findCustomerByEmail(String email) {
        return userRepository.findCustomerByEmail(email);
    }
    
    public List<CustomerEntity> findAll() {
        return userRepository.findAll();
    }

    public CustomerEntity getCustomerByEmail(String email) {
        return userRepository.findCustomerByEmail(email);
    }

    public String getCustomerIdByEmail(String email) {
        CustomerEntity customer = userRepository.findCustomerByEmail(email);
        if (customer != null) {
            return customer.getId().toString();
        } else {
            throw new RuntimeException("Customer not found");
        }
    }

    private String hashPassword(String password) {
        // Implement your preferred password hashing algorithm here
        // For example, you can use SHA-256, PBKDF2, or any other algorithm
        // Do not store passwords in plain text in your database
        return password;
    }

    public CustomerEntity getCustomerById(int cId) {
        return userRepository.findById(cId).orElseThrow(() -> new RuntimeException("Customer not found"));
    }

    public int getLoggedInCustomerId(int cId) {
        return cId;
    }
    
}
