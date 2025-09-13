package com.example.elecbill.model;





import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tblCustomer")
public class CustomerEntity {

    public Integer getId() {
		return cId;
	}

    public CustomerEntity() {
    	
    	
    }
	public CustomerEntity(Integer id, String name, String metno, String email, String address, String phone,
			String conType, String password, Double units, Double maxUnits, Double l1, Double l2) {
		super();
		this.cId = cId;
		this.name = name;
		this.metno = metno;
		this.email = email;
		this.address = address;
		this.phone = phone;
		this.conType = conType;
		this.password = password;
		this.units = units;
		this.maxUnits = maxUnits;
		this.l1 = l1;
		this.l2 = l2;
	}

	public void setId(Integer id) {
		this.cId = cId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getMetno() {
		return metno;
	}

	public void setMetno(String metno) {
		this.metno = metno;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getConType() {
		return conType;
	}

	public void setConType(String conType) {
		this.conType = conType;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Double getUnits() {
		return units;
	}

	public void setUnits(Double units) {
		this.units = units;
	}

	public Double getMaxUnits() {
		return maxUnits;
	}

	public void setMaxUnits(Double maxUnits) {
		this.maxUnits = maxUnits;
	}

	public Double getL1() {
		return l1;
	}

	public void setL1(Double l1) {
		this.l1 = l1;
	}

	public Double getL2() {
		return l2;
	}

	public void setL2(Double l2) {
		this.l2 = l2;
	}

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cId")
    private Integer cId;

    @Column(name = "cName")
    private String name;

    @Column(name = "metno")
    private String metno;

    @Column(name = "Email")
    private String email;

    @Column(name = "Address")
    private String address;

    @Column(name = "phone")
    private String phone;

    @Column(name = "con_type")
    private String conType;

    @Column(name = "password")
    private String password;

    @Column(name = "units")
    private Double units;

    @Column(name = "maxunits")
    private Double maxUnits;

    @Column(name = "l1")
    private Double l1;

    @Column(name = "l2")
    private Double l2;

    // Constructors, getters, and setters

    
}
