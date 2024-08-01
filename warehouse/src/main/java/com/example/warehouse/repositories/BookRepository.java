package com.example.warehouse.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.warehouse.models.Book;

public interface BookRepository extends JpaRepository<Book, String> {
}