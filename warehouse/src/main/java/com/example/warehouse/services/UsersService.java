package com.example.warehouse.services;


import java.util.List;

import org.springframework.stereotype.Service;

import com.example.warehouse.models.Users;
import com.example.warehouse.repositories.UsersRepository;

@Service
public class UsersService {
    
    private UsersRepository usersRepository;

    public UsersService(UsersRepository usersRepository){
        this.usersRepository = usersRepository;
    }

    public List<Users> getAllUsers() {
        return usersRepository.findAll();
    }

    public Users createUser(Users user) {
        return usersRepository.save(user);
    }

    public Users getUserById(Long id) {
        return usersRepository.findById(id).orElse(null);
    }

    public Users updateUser(Long id, Users userDetails) {
        
        Users user = usersRepository.findById(id).orElse(null);
        if (user != null) {
            user.setUsername(userDetails.getUsername());
            user.setPassword(userDetails.getPassword());
            user.setCompany(userDetails.getCompany());
            return usersRepository.save(user);
        }
        return null;
    }

    public void deleteUser(Long id) {
        usersRepository.deleteById(id);
    }
}
