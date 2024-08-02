package com.example.warehouse.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.warehouse.models.Users;
import com.example.warehouse.models.Warehouse;

public interface UsersRepository extends JpaRepository<Users, Integer> {
    
    //grab list of warehouses for the user
    @Query("SELECT w FROM Warehouse w WHERE w.manager.id = :userId")
    List<Warehouse> findWarehousesByUserId(@Param("userId") Integer userId);

    //keeping here for future implementations
    Users findByUsername(String username);
}