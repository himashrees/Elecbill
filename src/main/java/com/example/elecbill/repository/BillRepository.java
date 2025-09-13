package com.example.elecbill.repository;


import java.util.List;


import com.example.elecbill.model.BillEntity;
import com.example.elecbill.model.CustomerEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BillRepository extends JpaRepository<BillEntity, Integer> {

    List<BillEntity> findByCustomer(CustomerEntity customer);

}




