package com.example.warehouse.services;

import java.util.Optional;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.warehouse.models.Users;
import com.example.warehouse.models.Warehouse;
import com.example.warehouse.repositories.UsersRepository;

@Service
public class UsersService {
    
    @Autowired
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

    public Users getUserById(Integer id) {
        return usersRepository.findById(id).orElse(null);

    }

    public List<Warehouse> getWarehousesByUserId(Integer userId) {
        return usersRepository.findWarehousesByUserId(userId);
    }

    public Users updateUser(Integer id, Users userDetails) {
        
        Users user = usersRepository.findById(id).orElse(null);
        if (user != null) {
            user.setUsername(userDetails.getUsername());
            user.setPassword(userDetails.getPassword());
            user.setCompany(userDetails.getCompany());
            return usersRepository.save(user);
        }
        return null;
    }

    public void deleteUser(Integer id) {
        usersRepository.deleteById(id);
    }
}
