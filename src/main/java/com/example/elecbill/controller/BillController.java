package com.example.elecbill.controller;


import java.util.List;

import com.example.elecbill.model.BillEntity;
import com.example.elecbill.model.CustomerEntity;
import com.example.elecbill.repository.BillRepository;
import com.example.elecbill.repository.CustomerRepository;
import com.example.elecbill.service.BillService;
import com.example.elecbill.service.CustomerService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/bills")
public class BillController {

    @Autowired
    private BillService billService;

    @Autowired
    private CustomerService customerService;
     private  BillRepository billRepo;

    @GetMapping("/{billId}")
    public ResponseEntity<BillEntity> getBillById(@PathVariable int billId) {
        BillEntity bill = billService.getBillById(billId);
        return ResponseEntity.ok(bill);
    }

    @GetMapping("/customers/{cId}/bills")
    public ResponseEntity<List<BillEntity>> getBillsByCustomerId(@PathVariable("cId") Integer cId) {
        CustomerEntity customer = customerService.getCustomerById(cId);
        List<BillEntity> bills = billService.getBillsByCustomer(customer);
        return ResponseEntity.ok(bills);
    }
//    
//    @GetMapping("/current")
//    public ResponseEntity<Integer> getCurrentCustomerId(HttpServletRequest request) {
//      // Assuming you have some form of authentication and user session management
//
//      // Retrieve the current customer ID from the authenticated user or session
//      Integer customerId = null; // Implement the retrieval logic here
//
//      if (customerId != null) {
//        return ResponseEntity.ok(customerId);
//      } else {
//        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
//      }
//    }

    public List<BillEntity> getBillsByCustomer(CustomerEntity customer) {
        return billRepo.findByCustomer(customer);
    }

    @GetMapping("/")
    public List<BillEntity> getAllBills() {
        return billService.findAll();
    }
    
    @PostMapping("/users/{userId}/bills/{billId}/pay")
    public ResponseEntity<String> payBill(@PathVariable int userId, @PathVariable int billId) {
        // Get the user by userId
        CustomerEntity customer = customerService.getCustomerById(userId);
        
        // Get the bill by billId
        BillEntity bill = billService.getBillById(billId);
        
        // Check if the bill belongs to the user
        if (bill.getCustomer().getId().equals(customer.getId())) {
            // Update the bill status as paid
            bill.setStatus("Y");
            // Save the updated bill in the database
            billService.saveBill(bill);
            
            return ResponseEntity.ok("Bill paid successfully");
        } else {
            return ResponseEntity.badRequest().body("Bill does not belong to the user");
        }
    }



//    @PutMapping("/{billId}")
//    public ResponseEntity<BillEntity> updateBill(@PathVariable int Id, @RequestBody BillEntity bill) {
//        BillEntity updatedBill = billService.updateBill(Id, bill);
//        return ResponseEntity.ok(updatedBill);
//    }

    // Other bill-related endpoints

}

