package com.example.warehouse.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.warehouse.models.Users;
import com.example.warehouse.models.Warehouse;
import com.example.warehouse.services.UsersService;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UsersService usersService;

    @GetMapping
    public List<Users> getAllUsers() {
        return usersService.getAllUsers();
    }

    @PostMapping
    public Users createUser(@RequestBody Users user) {
        return usersService.createUser(user);
    }

    @GetMapping("/{id}")
    public Users getUserById(@PathVariable Integer id) {
        return usersService.getUserById(id);
    }
    
    //populat main page with warehouses 
    @GetMapping("/warehouses/{id}")
    public List<Warehouse> getWarehousesById(@PathVariable Integer id) {
        return usersService.getWarehousesByUserId(id);
    }

    @PutMapping("/{id}")
    public Users updateUser(@PathVariable Integer id, @RequestBody Users userDetails) {
        return usersService.updateUser(id, userDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Integer id) {
        usersService.deleteUser(id);
    }
}