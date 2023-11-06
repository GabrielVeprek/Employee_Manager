package com.company.employee_manager.service;

import com.company.employee_manager.model.employee.Employee;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class StatisticsService {
    public Map<String, Object> generateStatistics(Employee junior, Employee senior, Object averageTenure) {
        Map<String, Object> statistics = new HashMap<>();
        statistics.put("junior", junior);
        statistics.put("senior", senior);
        statistics.put("average", averageTenure);
        return statistics;
    }
}
