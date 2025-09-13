package com.example.elecbill.controller;



//import java.util.List;
//import java.util.UUID;
//
//import com.example.elecbill.exception.AuthenticationException;
//import com.example.elecbill.exception.UnauthorizedException;
//import com.example.elecbill.model.CustomerEntity;
//import com.example.elecbill.repository.CustomerRepository;
//import com.example.elecbill.service.CustomerService;
//import com.example.elecbill.service.LoginRequest;
//import com.example.elecbill.service.LoginResponse;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;

//@RestController
//@RequestMapping("/login")
//@CrossOrigin("*")
//public class LoginController {
//
//    @Autowired
//    private CustomerRepository customerRepo;
//
//    @PostMapping("/userlogin")
//    public String login(@RequestBody CustomerEntity customer) {
//        List<CustomerEntity> foundUsers = customerRepo.findByEmailAndPassword(customer.getEmail(), customer.getPassword());
//
//        if (foundUsers.size() == 1) {
//            return "Login successful!";
//        } else {
//            throw new UnauthorizedException("Invalid credentials");
//        }
//    }
//
//    @GetMapping
//    public ResponseEntity<Integer> getLoggedInCustomerId(@RequestParam int cId) {
//        return ResponseEntity.ok(cId);
//    }
//}


//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping("/loginuser")
//@CrossOrigin("*")
//public class LoginController {
//
//    private final CustomerService customerService;
//
//    @Autowired
//    public LoginController(CustomerService customerService) {
//        this.customerService = customerService;
//    }
//
//    @PostMapping("/login/userlogin")
//    public LoginResponse userLogin(@RequestBody LoginRequest loginRequest) {
//        // Perform custom authentication logic
//        boolean isAuthenticated = authenticateUser(loginRequest.getEmail(), loginRequest.getPassword());
//
//        if (isAuthenticated) {
//            // Retrieve the customer ID for the logged-in user
//            String customerId = customerService.getCustomerIdByEmail(loginRequest.getEmail());
//
//            // Generate and return the authentication token along with the customer ID
//            String authToken = generateAuthToken();
//            return new LoginResponse(authToken, customerId);
//        } else {
//            // Authentication failed
//            throw new AuthenticationException("Invalid credentials");
//        }
//    }
//
//    private boolean authenticateUser(String email, String password) {
//        // Implement your custom authentication logic here
//        // Example: Check if the email and password match in your database or external service
//        CustomerEntity customer = customerService.getCustomerByEmail(email);
//        if (customer != null && customer.getPassword().equals(password)) {
//            return true; // Authentication successful
//        }
//        return false; // Authentication failed
//    }
//
//
//    private String generateAuthToken() {
//        // Generate the authentication token logic
//        String authToken = UUID.randomUUID().toString();
//        return authToken;
//    }
//}










import java.util.List;

import com.example.elecbill.exception.UnauthorizedException;
import com.example.elecbill.model.CustomerEntity;
import com.example.elecbill.repository.CustomerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/login")
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {

    @Autowired
    private CustomerRepository customerRepo;

//    @PostMapping("/userlogin")
//    public String login(@RequestBody CustomerEntity customer) {
//        List<CustomerEntity> foundUsers = customerRepo.findByEmailAndPassword(customer.getEmail(), customer.getPassword());
//
//        if (foundUsers.size() == 1) {
//            return "Login successful!";
//        } else {
//            throw new UnauthorizedException("Invalid credentials");
//        }
//    }
    
    @PostMapping("/userlogin")
    public Integer login(@RequestBody CustomerEntity customer) {
        List<CustomerEntity> foundUsers = customerRepo.findByEmailAndPassword(customer.getEmail(), customer.getPassword());

        if (foundUsers.size() == 1) {
            CustomerEntity loggedInUser = foundUsers.get(0);
            return loggedInUser.getId(); // Return the cId of the logged-in user
        } else {
            throw new UnauthorizedException("Invalid credentials");
        }
    }


}
