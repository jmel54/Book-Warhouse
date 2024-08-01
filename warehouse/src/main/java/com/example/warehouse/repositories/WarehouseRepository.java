package com.example.warehouse.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.warehouse.models.Warehouse;

public interface WarehouseRepository extends JpaRepository<Warehouse, Long> {
}