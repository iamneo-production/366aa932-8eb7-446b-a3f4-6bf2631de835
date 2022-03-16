package com.examly.springapp.models;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
@Entity
@Table(name = "ordermodel")
public class OrderModel {
    @Id
    @GeneratedValue
    private String orderId;
    @ManyToOne(cascade = CascadeType.ALL)
    private UserModel userId;
    private String productName;
    private int quantity;
    private String totalPrice;
    private String status;
    private String price;
    public OrderModel() {
    }
    public OrderModel(String orderId, UserModel userId, String productName, int quantity, String totalPrice, String status,
            String price) {
        this.orderId = orderId;
        this.userId = userId;
        this.productName = productName;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
        this.status = status;
        this.price = price;
    }
    public String getOrderId() {
        return orderId;
    }
    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }
    public UserModel getUserId() {
        return userId;
    }
    public void setUserId(UserModel userId) {
        this.userId = userId;
    }
    public String getProductName() {
        return this.productName;
    }
    public void setProductName(String productName) {
        this.productName = productName;
    }
    public int getQuantity() {
        return quantity;
    }
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
    public String getTotalPrice() {
        return totalPrice;
    }
    public void setTotalPrice(String totalPrice) {
        this.totalPrice = totalPrice;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    public String getPrice() {
        return this.price;
    }
    public void setPrice(String price) {
        this.price = price;
    }
}