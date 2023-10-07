package com.company.employee_manager.controller;

import com.company.employee_manager.model.Employee;
import com.company.employee_manager.repository.EmployeeRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.time.LocalDate;
import java.util.Optional;
import java.util.UUID;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(EmployeeController.class)
public class EmployeeManagerApplicationMvcTests {

    @MockBean
    EmployeeRepository employeeRepository;

    @Autowired
    MockMvc mockMvc;

    String url = "/employee";

    ObjectMapper objectMapper = new ObjectMapper();

    @Test
    void getAll() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get(url).contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

        verify(employeeRepository).findAll();
    }

    @Test
    void add() throws Exception {
        var json = """
                {"firstName": "a","lastName": "a","mail": "a","entryDate": "2000-01-01"}""";

        mockMvc.perform(MockMvcRequestBuilders.post(url)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(json))
                .andExpect(status().isOk());

        var employee = new Employee(null, "a", "a", "a", LocalDate.of(2000, 1, 1));
        verify(employeeRepository).save(employee);
    }
    @Test
    void add2() throws Exception {
        var json = """
                {"firstName": "a","lastName": "a","mail": "a","entryDate": "2000-01-01"}""";

        mockMvc.perform(MockMvcRequestBuilders.post(url)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(json))
                .andExpect(status().isOk());

        var employee = new Employee(null, "a", "a", "a", LocalDate.of(2000, 1, 1));
        verify(employeeRepository).save(employee);
    }

}

