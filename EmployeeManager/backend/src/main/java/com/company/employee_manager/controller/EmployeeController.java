package com.company.employee_manager.controller;

import com.company.employee_manager.model.Employee;
import com.company.employee_manager.repository.EmployeeRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173/")
@RequestMapping("employee")
public class EmployeeController {
    private final EmployeeRepository employeeRepository;

    public EmployeeController(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @PostMapping
    Employee saveEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }
    @GetMapping
    List<Employee> findAllEmployee() {
        return employeeRepository.findAll();
    }
    @DeleteMapping("/delete/{ID}")
    void deleteEmployeeByID(@PathVariable long ID) {
        employeeRepository.deleteById(ID);
    }
}
