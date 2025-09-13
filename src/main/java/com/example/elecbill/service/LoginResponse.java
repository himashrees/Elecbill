package com.example.elecbill.service;

public class LoginResponse {

    private String authToken;
    private String customerId;

    public LoginResponse(String authToken, String customerId) {
        this.authToken = authToken;
        this.customerId = customerId;
    }

    public String getAuthToken() {
        return authToken;
    }

    public void setAuthToken(String authToken) {
        this.authToken = authToken;
    }

    public String getCustomerId() {
        return customerId;
    }

    public void setCustomerId(String customerId) {
        this.customerId = customerId;
    }
}
