package com.klu.service;

import com.klu.dto.UserDTO;
import com.klu.model.User;
import com.klu.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository repository;

    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    public List<User> getAllUsers() {
        return repository.findAll();
    }

    public User createUser(UserDTO dto) {
        User user = new User(dto.getName(), dto.getEmail());
        return repository.save(user);
    }
}