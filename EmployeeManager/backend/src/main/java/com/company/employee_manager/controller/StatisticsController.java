package com.company.employee_manager.controller;

import com.company.employee_manager.repository.EmployeeRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;


@RestController
@RequestMapping("employeeStatistics")
public class StatisticsController {

    private final EmployeeRepository employeeRepository;

    public StatisticsController(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }


    @GetMapping
    public Map<String, Object> getStatistics() {
        Map<String, Object> statistics = new HashMap<>();

        var junior = employeeRepository.getJunior();
        var senior = employeeRepository.getSenior();
        var averageTenure = employeeRepository.getAverageTenure();

        statistics.put("junior", junior);
        statistics.put("senior", senior);
        statistics.put("average", averageTenure);

        return statistics;
    }
}
