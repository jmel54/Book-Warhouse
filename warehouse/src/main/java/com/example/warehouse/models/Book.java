package com.example.warehouse.models;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "book")
public class Book {
    //don't auto generate value, use ISBN natural primary key
    @Id
    private String isbn;

    @Column(nullable = false)
    private String title;

    private String author;

    @Column(length = 1000)
    private String description;

    private String pictureUrl;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "warehouse_id")
    private Warehouse warehouse;

    private Integer quantity;

    //log entry
    private LocalDateTime createdAt = LocalDateTime.now();

    public Book(){}
    public Book(String isbn, String title, String author, String description, String pictureUrl, Warehouse warehouse,
            Integer quantity) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.description = description;
        this.pictureUrl = pictureUrl;
        this.warehouse = warehouse;
        this.quantity = quantity;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPictureUrl() {
        return pictureUrl;
    }

    public void setPictureUrl(String pictureUrl) {
        this.pictureUrl = pictureUrl;
    }

    public Warehouse getWarehouse() {
        return warehouse;
    }

    public void setWarehouse(Warehouse warehouse) {
        this.warehouse = warehouse;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    // Getters and Setters
}