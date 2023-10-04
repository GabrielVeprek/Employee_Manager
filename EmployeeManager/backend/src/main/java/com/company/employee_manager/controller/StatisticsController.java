package com.company.employee_manager.controller;

import com.company.employee_manager.model.Employee;
import com.company.employee_manager.repository.EmployeeRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@CrossOrigin("http://localhost:5173/")
@RequestMapping("employeeStatistics")
public class StatisticsController {

    private final EmployeeRepository employeeRepository;

    public StatisticsController(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }


    @GetMapping
    public Map<String, Object> getStatistics() {
        List<Employee> employees = employeeRepository.findAll();
        Map<String, Object> statistics = new HashMap<>();

        var junior = employees.stream()
                .max(Comparator.comparingInt(employee -> employee.getEntryDate().getYear()))
                .stream().max(Comparator.comparingInt(employee -> employee.getEntryDate().getMonthValue()));


        var senior = employees.stream()
                .min(Comparator.comparingInt(employee -> employee.getEntryDate().getYear()))
                .stream().min(Comparator.comparingInt(employee -> employee.getEntryDate().getMonthValue()));

        var average = employees.stream()
                .mapToInt(employee -> LocalDate.now().getYear() - employee.getEntryDate().getYear())
                .average();

        statistics.put("junior", junior);
        statistics.put("senior", senior);
        statistics.put("average", average);

        return statistics;
    }
}
