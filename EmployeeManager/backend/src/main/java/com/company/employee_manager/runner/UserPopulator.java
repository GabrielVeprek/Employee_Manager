package com.company.employee_manager.runner;

import com.company.employee_manager.model.User;
import com.company.employee_manager.repository.UserRepository;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Set;
import java.util.UUID;
@Configuration
public class UserPopulator {
    @Bean
    ApplicationRunner populateUser(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        return args -> {
            var user = new User(UUID.randomUUID(), "user", passwordEncoder.encode("user123"), Set.of("USER"));
            userRepository.save(user);
            var admin = new User(UUID.randomUUID(), "admin", passwordEncoder.encode("admin123"), Set.of("ADMIN", "USER"));
            userRepository.save(admin);
        };
    }
}