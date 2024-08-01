package com.example.warehouse.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.warehouse.models.Users;

public interface UsersRepository extends JpaRepository<Users, Long> {
    Users findByUsername(String username);
}