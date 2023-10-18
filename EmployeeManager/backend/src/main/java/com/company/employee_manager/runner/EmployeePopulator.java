package com.company.employee_manager.runner;

import com.company.employee_manager.model.Employee;
import com.company.employee_manager.repository.EmployeeRepository;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDate;
import java.util.UUID;

@Configuration
public class EmployeePopulator {
    @Bean
    ApplicationRunner populateEmployee(EmployeeRepository employeeRepository, PasswordEncoder passwordEncoder) {
        return args -> {
            var user = new Employee(UUID.randomUUID(), "Peter", "Parker", "peter.parker@java.com",
                    LocalDate.of(2000, 10, 1));
            employeeRepository.save(user);
        };
    }
}