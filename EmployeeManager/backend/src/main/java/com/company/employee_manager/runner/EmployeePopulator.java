package com.company.employee_manager.runner;

import com.company.employee_manager.model.Employee;
import com.company.employee_manager.repository.EmployeeRepository;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Configuration
public class EmployeePopulator {
    @Bean
    ApplicationRunner populateEmployee(EmployeeRepository employeeRepository, PasswordEncoder passwordEncoder) {
        return args -> {
            var employee1 = new Employee(UUID.randomUUID(), "Max", "Mustermann", "max.mustermann@java.com", LocalDate.of(2015, 10, 1));
            var employee2 = new Employee(UUID.randomUUID(), "Anna", "Schmidt", "anna.schmidt@python.com", LocalDate.of(2016, 3, 15));
            var employee3 = new Employee(UUID.randomUUID(), "Erik", "Müller", "erik.muller@javascript.com", LocalDate.of(2017, 8, 20));
            var employee4 = new Employee(UUID.randomUUID(), "Lena", "Schneider", "lena.schneider@ruby.com", LocalDate.of(2018, 5, 5));
            var employee5 = new Employee(UUID.randomUUID(), "Paul", "Fischer", "paul.fischer@csharp.com", LocalDate.of(2019, 11, 10));
            var employee6 = new Employee(UUID.randomUUID(), "Sophia", "Wagner", "sophia.wagner@java.com", LocalDate.of(2015, 5, 12));
            var employee7 = new Employee(UUID.randomUUID(), "David", "Becker", "david.becker@python.com", LocalDate.of(2016, 9, 8));
            var employee8 = new Employee(UUID.randomUUID(), "Julia", "Klein", "julia.klein@javascript.com", LocalDate.of(2017, 2, 25));
            var employee9 = new Employee(UUID.randomUUID(), "Felix", "Schulz", "felix.schulz@ruby.com", LocalDate.of(2018, 7, 17));
            var employee10 = new Employee(UUID.randomUUID(), "Hannah", "Hoffmann", "hannah.hoffmann@csharp.com", LocalDate.of(2019, 12, 1));
            var employee11 = new Employee(UUID.randomUUID(), "Simon", "Lehmann", "simon.lehmann@java.com", LocalDate.of(2015, 6, 14));
            var employee12 = new Employee(UUID.randomUUID(), "Laura", "Werner", "laura.werner@python.com", LocalDate.of(2016, 11, 19));
            var employee13 = new Employee(UUID.randomUUID(), "Nico", "Lang", "nico.lang@javascript.com", LocalDate.of(2017, 4, 3));
            var employee14 = new Employee(UUID.randomUUID(), "Mia", "Herrmann", "mia.herrmann@ruby.com", LocalDate.of(2018, 9, 30));
            var employee15 = new Employee(UUID.randomUUID(), "Tobias", "Koch", "tobias.koch@csharp.com", LocalDate.of(2019, 3, 7));
            var employee16 = new Employee(UUID.randomUUID(), "Emilia", "Schuster", "emilia.schuster@java.com", LocalDate.of(2015, 7, 22));
            var employee17 = new Employee(UUID.randomUUID(), "Jonas", "Franke", "jonas.franke@python.com", LocalDate.of(2016, 12, 12));
            var employee18 = new Employee(UUID.randomUUID(), "Sarah", "Bauer", "sarah.bauer@javascript.com", LocalDate.of(2017, 5, 28));
            var employee19 = new Employee(UUID.randomUUID(), "Lukas", "Hartmann", "lukas.hartmann@ruby.com", LocalDate.of(2018, 10, 4));
            var employee20 = new Employee(UUID.randomUUID(), "Lara", "Schmitt", "lara.schmitt@csharp.com", LocalDate.of(2019, 4, 15));
            var employee21 = new Employee(UUID.randomUUID(), "Finn", "Schröder", "finn.schroeder@java.com", LocalDate.of(2015, 8, 9));
            var employee22 = new Employee(UUID.randomUUID(), "Sophie", "Krause", "sophie.krause@python.com", LocalDate.of(2016, 1, 27));
            var employee23 = new Employee(UUID.randomUUID(), "Paula", "Witt", "paula.witt@javascript.com", LocalDate.of(2017, 6, 23));
            var employee24 = new Employee(UUID.randomUUID(), "Tim", "Zimmermann", "tim.zimmermann@ruby.com", LocalDate.of(2018, 11, 8));
            var employee25 = new Employee(UUID.randomUUID(), "Julian", "Berg", "julian.berg@csharp.com", LocalDate.of(2019, 5, 10));
            var employee26 = new Employee(UUID.randomUUID(), "Lina", "Fuchs", "lina.fuchs@java.com", LocalDate.of(2015, 9, 18));
            var employee27 = new Employee(UUID.randomUUID(), "Marie", "Hofmann", "marie.hofmann@python.com", LocalDate.of(2016, 2, 14));
            var employee28 = new Employee(UUID.randomUUID(), "Ben", "Sommer", "ben.sommer@javascript.com", LocalDate.of(2017, 7, 31));
            var employee29 = new Employee(UUID.randomUUID(), "Tom", "Vogel", "tom.vogel@ruby.com", LocalDate.of(2018, 12, 15));
            var employee30 = new Employee(UUID.randomUUID(), "Clara", "Wolf", "clara.wolf@csharp.com", LocalDate.of(2019, 6, 5));
            var employee31 = new Employee(UUID.randomUUID(), "Liam", "Taylor", "liam.taylor@dart.com", LocalDate.of(2017, 4, 20));
            var employee32 = new Employee(UUID.randomUUID(), "Ella", "Young", "ella.young@perl.com", LocalDate.of(2018, 9, 12));
            var employee33 = new Employee(UUID.randomUUID(), "Mason", "Wright", "mason.wright@elixir.com", LocalDate.of(2019, 2, 1));
            var employee34 = new Employee(UUID.randomUUID(), "Harper", "Hall", "harper.hall@lua.com", LocalDate.of(2020, 7, 8));
            var employee35 = new Employee(UUID.randomUUID(), "Noah", "Brown", "noah.brown@typescript.com", LocalDate.of(2021, 1, 15));
            var employee36 = new Employee(UUID.randomUUID(), "Ava", "Evans", "ava.evans@swift.com", LocalDate.of(2022, 5, 3));
            var employee37 = new Employee(UUID.randomUUID(), "Lucas", "Garcia", "lucas.garcia@dart.com", LocalDate.of(2017, 10, 7));
            var employee38 = new Employee(UUID.randomUUID(), "Sophia", "Smith", "sophia.smith@fortran.com", LocalDate.of(2018, 6, 18));
            var employee39 = new Employee(UUID.randomUUID(), "Oliver", "Johnson", "oliver.johnson@cobol.com", LocalDate.of(2019, 11, 25));
            var employee40 = new Employee(UUID.randomUUID(), "Emma", "Harris", "emma.harris@haskell.com", LocalDate.of(2020, 3, 30));
            var employee41 = new Employee(UUID.randomUUID(), "Liam", "King", "liam.king@perl.com", LocalDate.of(2021, 8, 12));
            var employee42 = new Employee(UUID.randomUUID(), "Olivia", "Anderson", "olivia.anderson@racket.com", LocalDate.of(2022, 2, 17));
            var employee43 = new Employee(UUID.randomUUID(), "Mia", "Gomez", "mia.gomez@ada.com", LocalDate.of(2017, 12, 28));
            var employee44 = new Employee(UUID.randomUUID(), "Noah", "Davis", "noah.davis@lisp.com", LocalDate.of(2018, 5, 6));
            var employee45 = new Employee(UUID.randomUUID(), "Sophia", "Hernandez", "sophia.hernandez@scala.com", LocalDate.of(2019, 9, 9));
            var employee46 = new Employee(UUID.randomUUID(), "Ethan", "Clark", "ethan.clark@lua.com", LocalDate.of(2020, 1, 1));
            var employee47 = new Employee(UUID.randomUUID(), "Amelia", "Foster", "amelia.foster@elixir.com", LocalDate.of(2021, 6, 3));
            var employee48 = new Employee(UUID.randomUUID(), "Logan", "Irwin", "logan.irwin@kotlin.com", LocalDate.of(2022, 10, 10));
            var employee49 = new Employee(UUID.randomUUID(), "Ella", "Miller", "ella.miller@fortran.com", LocalDate.of(2017, 3, 20));
            var employee50 = new Employee(UUID.randomUUID(), "Liam", "Martin", "liam.martin@cobol.com", LocalDate.of(2018, 8, 14));

            employeeRepository.saveAll(List.of(employee1, employee2, employee3, employee4, employee5, employee6, employee7, employee8, employee9, employee10, employee11, employee12, employee13, employee14, employee15, employee16, employee17, employee18, employee19, employee20, employee21, employee22, employee23, employee24, employee25, employee26, employee27, employee28, employee29, employee30, employee31, employee32, employee33, employee34, employee35, employee36, employee37, employee38, employee39, employee40, employee41, employee42, employee43, employee44, employee45, employee46, employee47, employee48, employee49, employee50));
        };
    }
}