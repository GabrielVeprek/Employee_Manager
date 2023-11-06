package com.company.employee_manager.controller;

import com.company.employee_manager.repository.EmployeeRepository;
import com.company.employee_manager.service.StatisticsService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("employeeStatistics")
public class StatisticsController {
    private final EmployeeRepository employeeRepository;
    private final StatisticsService statisticsService;

    public StatisticsController(EmployeeRepository employeeRepository, StatisticsService statisticsService) {
        this.employeeRepository = employeeRepository;
        this.statisticsService = statisticsService;
    }

    @GetMapping
    public Map<String, Object> getStatistics() {
        var junior = employeeRepository.getJunior();
        var senior = employeeRepository.getSenior();
        var averageTenure = employeeRepository.getAverageTenure();
        return statisticsService.generateStatistics(junior, senior, averageTenure);
    }
}
