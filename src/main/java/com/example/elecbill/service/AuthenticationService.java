package com.example.elecbill.service;

import com.example.elecbill.model.CustomerEntity;
import com.example.elecbill.service.CustomerService;
import com.example.elecbill.exception.AuthenticationException;

public class AuthenticationService {
    private CustomerService customerService;

    public AuthenticationService(CustomerService customerService) {
        this.customerService = customerService;
    }

    private boolean authenticateUser(String email, String password) {
        // Retrieve the customer by email
        CustomerEntity customer = customerService.getCustomerByEmail(email);

        if (customer == null) {
            throw new AuthenticationException("Invalid email or password");
        }

        // Compare the password with the stored password
        if (!password.equals(customer.getPassword())) {
            throw new AuthenticationException("Invalid email or password");
        }

        // Authentication successful
        return true;
    }

    private String generateAuthToken() {
        // Generate the authentication token logic
        // ...

        return "your-auth-token";
    }
}

