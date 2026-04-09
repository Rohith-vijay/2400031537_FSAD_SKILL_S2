package com.klu.controller;

import com.klu.dto.UserDTO;
import com.klu.model.User;
import com.klu.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping
    public List<User> getUsers() {
        return service.getAllUsers();
    }

    @PostMapping
    public User addUser(@RequestBody UserDTO dto) {
        return service.createUser(dto);
    }
}