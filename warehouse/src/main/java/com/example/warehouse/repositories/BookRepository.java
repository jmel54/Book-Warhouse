package com.example.warehouse.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.warehouse.models.Book;

public interface BookRepository extends JpaRepository<Book, String> {
    List<Book> findByWarehouseId(Integer warehouseId);
}