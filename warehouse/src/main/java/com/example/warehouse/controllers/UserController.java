package com.example.warehouse.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.warehouse.models.Users;
import com.example.warehouse.repositories.UsersRepository;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UsersRepository UsersRepository;

    @GetMapping
    public List<Users> getAllUsers() {
        return UsersRepository.findAll();
    }

    @PostMapping
    public Users createUser(@RequestBody Users user) {
        return UsersRepository.save(user);
    }

    @GetMapping("/{id}")
    public Users getUserById(@PathVariable Long id) {
        return UsersRepository.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public Users updateUser(@PathVariable Long id, @RequestBody Users userDetails) {
        Users user = UsersRepository.findById(id).orElse(null);
        if (user != null) {
            user.setUsername(userDetails.getUsername());
            user.setPassword(userDetails.getPassword());
            user.setRole(userDetails.getRole());
            return UsersRepository.save(user);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        UsersRepository.deleteById(id);
    }
}