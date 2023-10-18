package com.company.employee_manager.controller;

import com.company.employee_manager.model.User;
import com.company.employee_manager.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.HashSet;
@RestController
@RequestMapping("register")
public class RegisterController {
    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    public RegisterController(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }


    @PostMapping
    public ResponseEntity<String> saveUser(@RequestBody User user) {
        if (userRepository.findByUsername(user.getUsername()).isPresent()) {
            return new ResponseEntity<>("Benutzername bereits vergeben", HttpStatus.BAD_REQUEST);
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        user.setAuthorities(new HashSet<>(Arrays.asList("ROLE_USER")));

        userRepository.save(user);

        return new ResponseEntity<>("Benutzer erfolgreich registriert", HttpStatus.CREATED);
    }

}