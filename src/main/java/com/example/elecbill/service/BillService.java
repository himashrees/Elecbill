package com.example.elecbill.service;

import java.util.List;

import com.example.elecbill.model.BillEntity;
import com.example.elecbill.model.CustomerEntity;
import com.example.elecbill.repository.BillRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BillService {

    @Autowired
    private BillRepository billRepository;

   

    public List<BillEntity> getBillsByCustomer(CustomerEntity customer) {
        return billRepository.findByCustomer(customer);
    }
    public List<BillEntity> findAll() {
        return billRepository.findAll();
    }
    

    public BillEntity getBillById(int id) {
        return billRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Bill not found"));
    }

    public void payBill(int billId) {
        BillEntity bill = getBillById(billId);
        bill.setStatus("Y");
        billRepository.save(bill);
    }

    public BillEntity saveBill(BillEntity bill) {
        return billRepository.save(bill);
    }

}

