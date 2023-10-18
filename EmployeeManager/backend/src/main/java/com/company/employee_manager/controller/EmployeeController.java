package com.company.employee_manager.controller;

import com.company.employee_manager.exception.EmployeeNotFoundException;
import com.company.employee_manager.model.Employee;
import com.company.employee_manager.repository.EmployeeRepository;
import org.hibernate.resource.beans.spi.BeanInstanceProducer;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

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

    @GetMapping("/{ID}")
    Employee findByID(@PathVariable UUID ID) throws EmployeeNotFoundException {
        return employeeRepository.findById(ID)
                .orElseThrow(EmployeeNotFoundException::new);

    }

    @PutMapping("/{ID}")
    Employee updateEmployee(@RequestBody Employee newEmployee, @PathVariable UUID ID) throws EmployeeNotFoundException {
        return employeeRepository.findById(ID)
                .map(employee -> {
                    employee.setFirstName(newEmployee.getFirstName());
                    employee.setLastName(newEmployee.getLastName());
                    employee.setMail(newEmployee.getMail());
                    employee.setEntryDate(newEmployee.getEntryDate());
                    return employeeRepository.save(employee);
                }).orElseThrow(EmployeeNotFoundException::new);
    }

    @DeleteMapping("/{ID}")
    void deleteEmployee(@PathVariable UUID ID) throws EmployeeNotFoundException {
        if (!employeeRepository.existsById(ID)) {
            throw new EmployeeNotFoundException();
        }
        employeeRepository.deleteById(ID);
    }
}
