package com.example.elecbill.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.sql.Timestamp;

@Entity
@Table(name = "tblBill")
public class BillEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
    private Integer Id;

    @Column(name = "metno")
    private String metno;

    @Column(name = "date")
    private Timestamp date;

    @Column(name = "status")
    private String status;

    @Column(name = "amount")
    private Double amount;

    @ManyToOne
    @JoinColumn(name = "cId", foreignKey = @ForeignKey(name = "FK_tblBill_Foreign"))
    private CustomerEntity customer;

    @Column(name = "PaidDate")
    private String paidDate;

    public BillEntity() {
        // Default constructor required by JPA
    }

    public BillEntity(String metno, Timestamp date, String status, Double amount, CustomerEntity customer, String paidDate) {
        this.metno = metno;
        this.date = date;
        this.status = status;
        this.amount = amount;
        this.customer = customer;
        this.paidDate = paidDate;
    }

    // Getters and setters

    public Integer getId() {
        return Id;
    }

    public void setId(Integer id) {
        this.Id = Id;
    }

    public String getMetno() {
        return metno;
    }

    public  void setMetno(String metno) {
        this.metno = metno;
    }

    public Timestamp getDate() {
        return date;
    }

    public void setDate(Timestamp date) {
        this.date = date;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public CustomerEntity getCustomer() {
        return customer;
    }

    public void setCustomer(CustomerEntity customer) {
        this.customer = customer;
    }

    public String getPaidDate() {
        return paidDate;
    }

    public void setPaidDate(String paidDate) {
        this.paidDate = paidDate;
    }


}
