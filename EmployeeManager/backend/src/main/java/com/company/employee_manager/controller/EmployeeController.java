package com.company.employee_manager.controller;

import com.company.employee_manager.exception.EmployeeNotFoundException;
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

    @GetMapping("/{ID}")
    Employee findByID(@PathVariable long ID) throws EmployeeNotFoundException {
        return employeeRepository.findById(ID)
                .orElseThrow(EmployeeNotFoundException::new);
    }

    @PutMapping("/{ID}")
    Employee updateEmployee(@RequestBody Employee newEmployee, @PathVariable long ID) throws EmployeeNotFoundException {
        return employeeRepository.findById(ID)
                .map(employee -> {
                    employee.setFirstName(newEmployee.getFirstName());
                    employee.setLastName(newEmployee.getLastName());
                    employee.setMail(newEmployee.getMail());
                    return employeeRepository.save(employee);
                }).orElseThrow(EmployeeNotFoundException::new);
    }
}
