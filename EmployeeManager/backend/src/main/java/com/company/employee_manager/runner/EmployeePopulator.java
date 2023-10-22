package com.company.employee_manager.runner;

import com.company.employee_manager.model.employee.Employee;
import com.company.employee_manager.model.employee.Position;
import com.company.employee_manager.repository.EmployeeRepository;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Configuration
public class EmployeePopulator {
    @Bean
    ApplicationRunner populateEmployee(EmployeeRepository employeeRepository) {
        return args -> {
            var employee1 = new Employee(UUID.randomUUID(), "Max", "Mustermann", "max.mustermann@java.com", LocalDate.of(2015, 10, 1), Position.SENIOR, Position.SENIOR.getSalary());
            var employee2 = new Employee(UUID.randomUUID(), "Anna", "Schmidt", "anna.schmidt@python.com", LocalDate.of(2016, 3, 15), Position.SENIOR, Position.SENIOR.getSalary());
            var employee3 = new Employee(UUID.randomUUID(), "Erik", "Müller", "erik.muller@javascript.com", LocalDate.of(2017, 8, 20), Position.SENIOR, Position.SENIOR.getSalary());
            var employee4 = new Employee(UUID.randomUUID(), "Lena", "Schneider", "lena.schneider@ruby.com", LocalDate.of(2018, 5, 5), Position.SENIOR, Position.SENIOR.getSalary());
            var employee5 = new Employee(UUID.randomUUID(), "Paul", "Fischer", "paul.fischer@csharp.com", LocalDate.of(2019, 11, 10), Position.SENIOR, Position.SENIOR.getSalary());
            var employee6 = new Employee(UUID.randomUUID(), "Sophia", "Wagner", "sophia.wagner@java.com", LocalDate.of(2015, 5, 12), Position.SENIOR, Position.SENIOR.getSalary());
            var employee7 = new Employee(UUID.randomUUID(), "David", "Becker", "david.becker@python.com", LocalDate.of(2016, 9, 8), Position.SENIOR, Position.SENIOR.getSalary());
            var employee8 = new Employee(UUID.randomUUID(), "Julia", "Klein", "julia.klein@javascript.com", LocalDate.of(2017, 2, 25), Position.SENIOR, Position.SENIOR.getSalary());
            var employee9 = new Employee(UUID.randomUUID(), "Felix", "Schulz", "felix.schulz@ruby.com", LocalDate.of(2018, 7, 17), Position.SENIOR, Position.SENIOR.getSalary());
            var employee10 = new Employee(UUID.randomUUID(), "Hannah", "Hoffmann", "hannah.hoffmann@csharp.com", LocalDate.of(2019, 12, 1), Position.SENIOR, Position.SENIOR.getSalary());
            var employee11 = new Employee(UUID.randomUUID(), "Simon", "Lehmann", "simon.lehmann@java.com", LocalDate.of(2015, 6, 14), Position.SENIOR, Position.SENIOR.getSalary());
            var employee12 = new Employee(UUID.randomUUID(), "Laura", "Werner", "laura.werner@python.com", LocalDate.of(2016, 11, 19), Position.SENIOR, Position.SENIOR.getSalary());
            var employee13 = new Employee(UUID.randomUUID(), "Nico", "Lang", "nico.lang@javascript.com", LocalDate.of(2017, 4, 3), Position.SENIOR, Position.SENIOR.getSalary());
            var employee14 = new Employee(UUID.randomUUID(), "Mia", "Herrmann", "mia.herrmann@ruby.com", LocalDate.of(2018, 9, 30), Position.SENIOR, Position.SENIOR.getSalary());
            var employee15 = new Employee(UUID.randomUUID(), "Tobias", "Koch", "tobias.koch@csharp.com", LocalDate.of(2019, 3, 7), Position.SENIOR, Position.SENIOR.getSalary());
            var employee16 = new Employee(UUID.randomUUID(), "Emilia", "Schuster", "emilia.schuster@java.com", LocalDate.of(2015, 7, 22), Position.SENIOR, Position.SENIOR.getSalary());
            var employee17 = new Employee(UUID.randomUUID(), "Jonas", "Franke", "jonas.franke@python.com", LocalDate.of(2016, 12, 12), Position.SENIOR, Position.SENIOR.getSalary());
            var employee18 = new Employee(UUID.randomUUID(), "Sarah", "Bauer", "sarah.bauer@javascript.com", LocalDate.of(2017, 5, 28), Position.SENIOR, Position.SENIOR.getSalary());
            var employee19 = new Employee(UUID.randomUUID(), "Lukas", "Hartmann", "lukas.hartmann@ruby.com", LocalDate.of(2018, 10, 4), Position.SENIOR, Position.SENIOR.getSalary());
            var employee20 = new Employee(UUID.randomUUID(), "Lara", "Schmitt", "lara.schmitt@csharp.com", LocalDate.of(2019, 4, 15), Position.SENIOR, Position.SENIOR.getSalary());
            var employee21 = new Employee(UUID.randomUUID(), "Finn", "Schröder", "finn.schroeder@java.com", LocalDate.of(2015, 8, 9), Position.SENIOR, Position.SENIOR.getSalary());
            var employee22 = new Employee(UUID.randomUUID(), "Sophie", "Krause", "sophie.krause@python.com", LocalDate.of(2016, 1, 27), Position.SENIOR, Position.SENIOR.getSalary());
            var employee23 = new Employee(UUID.randomUUID(), "Paula", "Witt", "paula.witt@javascript.com", LocalDate.of(2017, 6, 23), Position.SENIOR, Position.SENIOR.getSalary());
            var employee24 = new Employee(UUID.randomUUID(), "Tim", "Zimmermann", "tim.zimmermann@ruby.com", LocalDate.of(2018, 11, 8), Position.SENIOR, Position.SENIOR.getSalary());
            var employee25 = new Employee(UUID.randomUUID(), "Julian", "Berg", "julian.berg@csharp.com", LocalDate.of(2019, 5, 10), Position.SENIOR, Position.SENIOR.getSalary());
            var employee26 = new Employee(UUID.randomUUID(), "Lina", "Fuchs", "lina.fuchs@java.com", LocalDate.of(2015, 9, 18), Position.SENIOR, Position.SENIOR.getSalary());
            var employee27 = new Employee(UUID.randomUUID(), "Marie", "Hofmann", "marie.hofmann@python.com", LocalDate.of(2016, 2, 14), Position.SENIOR, Position.SENIOR.getSalary());
            var employee28 = new Employee(UUID.randomUUID(), "Ben", "Sommer", "ben.sommer@javascript.com", LocalDate.of(2017, 7, 31), Position.SENIOR, Position.SENIOR.getSalary());
            var employee29 = new Employee(UUID.randomUUID(), "Tom", "Vogel", "tom.vogel@ruby.com", LocalDate.of(2018, 12, 15), Position.SENIOR, Position.SENIOR.getSalary());
            var employee30 = new Employee(UUID.randomUUID(), "Clara", "Wolf", "clara.wolf@csharp.com", LocalDate.of(2019, 6, 5), Position.SENIOR, Position.SENIOR.getSalary());
            var employee31 = new Employee(UUID.randomUUID(), "Liam", "Taylor", "liam.taylor@dart.com", LocalDate.of(2017, 4, 20), Position.SENIOR, Position.SENIOR.getSalary());
            var employee32 = new Employee(UUID.randomUUID(), "Ella", "Young", "ella.young@perl.com", LocalDate.of(2018, 9, 12), Position.SENIOR, Position.SENIOR.getSalary());
            var employee33 = new Employee(UUID.randomUUID(), "Mason", "Wright", "mason.wright@elixir.com", LocalDate.of(2019, 2, 1), Position.SENIOR, Position.SENIOR.getSalary());
            var employee34 = new Employee(UUID.randomUUID(), "Harper", "Hall", "harper.hall@lua.com", LocalDate.of(2020, 7, 8), Position.SENIOR, Position.SENIOR.getSalary());
            var employee35 = new Employee(UUID.randomUUID(), "Noah", "Brown", "noah.brown@typescript.com", LocalDate.of(2021, 1, 15), Position.SENIOR, Position.SENIOR.getSalary());
            var employee36 = new Employee(UUID.randomUUID(), "Ava", "Evans", "ava.evans@swift.com", LocalDate.of(2022, 5, 3), Position.SENIOR, Position.SENIOR.getSalary());
            var employee37 = new Employee(UUID.randomUUID(), "Lucas", "Garcia", "lucas.garcia@dart.com", LocalDate.of(2017, 10, 7), Position.SENIOR, Position.SENIOR.getSalary());
            var employee38 = new Employee(UUID.randomUUID(), "Sophia", "Smith", "sophia.smith@fortran.com", LocalDate.of(2018, 6, 18), Position.SENIOR, Position.SENIOR.getSalary());
            var employee39 = new Employee(UUID.randomUUID(), "Oliver", "Johnson", "oliver.johnson@cobol.com", LocalDate.of(2019, 11, 25), Position.SENIOR, Position.SENIOR.getSalary());
            var employee40 = new Employee(UUID.randomUUID(), "Emma", "Harris", "emma.harris@haskell.com", LocalDate.of(2020, 3, 30), Position.SENIOR, Position.SENIOR.getSalary());
            var employee41 = new Employee(UUID.randomUUID(), "Liam", "King", "liam.king@perl.com", LocalDate.of(2021, 8, 12), Position.SENIOR, Position.SENIOR.getSalary());
            var employee42 = new Employee(UUID.randomUUID(), "Olivia", "Anderson", "olivia.anderson@racket.com", LocalDate.of(2022, 2, 17), Position.SENIOR, Position.SENIOR.getSalary());
            var employee43 = new Employee(UUID.randomUUID(), "Mia", "Gomez", "mia.gomez@ada.com", LocalDate.of(2017, 12, 28), Position.SENIOR, Position.SENIOR.getSalary());
            var employee44 = new Employee(UUID.randomUUID(), "Noah", "Davis", "noah.davis@lisp.com", LocalDate.of(2018, 5, 6), Position.SENIOR, Position.SENIOR.getSalary());
            var employee45 = new Employee(UUID.randomUUID(), "Sophia", "Hernandez", "sophia.hernandez@scala.com", LocalDate.of(2019, 9, 9), Position.SENIOR, Position.SENIOR.getSalary());
            var employee46 = new Employee(UUID.randomUUID(), "Ethan", "Clark", "ethan.clark@lua.com", LocalDate.of(2020, 1, 1), Position.SENIOR, Position.SENIOR.getSalary());
            var employee47 = new Employee(UUID.randomUUID(), "Amelia", "Foster", "amelia.foster@elixir.com", LocalDate.of(2021, 6, 3), Position.SENIOR, Position.SENIOR.getSalary());
            var employee48 = new Employee(UUID.randomUUID(), "Logan", "Irwin", "logan.irwin@kotlin.com", LocalDate.of(2022, 10, 10), Position.SENIOR, Position.SENIOR.getSalary());
            var employee49 = new Employee(UUID.randomUUID(), "Ella", "Miller", "ella.miller@fortran.com", LocalDate.of(2017, 3, 20), Position.SENIOR, Position.SENIOR.getSalary());
            var employee50 = new Employee(UUID.randomUUID(), "Liam", "Martin", "liam.martin@cobol.com", LocalDate.of(2018, 8, 14), Position.SENIOR, Position.SENIOR.getSalary());

            employeeRepository.saveAll(List.of(employee1, employee2, employee3, employee4, employee5, employee6, employee7, employee8, employee9, employee10, employee11, employee12, employee13, employee14, employee15, employee16, employee17, employee18, employee19, employee20, employee21, employee22, employee23, employee24, employee25, employee26, employee27, employee28, employee29, employee30, employee31, employee32, employee33, employee34, employee35, employee36, employee37, employee38, employee39, employee40, employee41, employee42, employee43, employee44, employee45, employee46, employee47, employee48, employee49, employee50));
        };
    }
}