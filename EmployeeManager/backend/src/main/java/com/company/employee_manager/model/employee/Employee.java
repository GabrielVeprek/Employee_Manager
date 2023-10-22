package com.company.employee_manager.model.employee;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.Objects;
import java.util.UUID;

@Entity
public class Employee {

    @Id
    @GeneratedValue
    private UUID ID;

    private String firstName;

    private String lastName;

    private String mail;

    private LocalDate entryDate;

    private Position position;


    public Employee(UUID ID, String firstName, String lastName, String mail, LocalDate entryDate, Position position, int salary) {
        this.ID = ID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.mail = mail;
        this.entryDate = entryDate;
        this.position = position;
    }

    public Employee() {
    }

    public UUID getID() {
        return ID;
    }

    public void setID(UUID ID) {
        this.ID = ID;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public LocalDate getEntryDate() {
        return entryDate;
    }

    public void setEntryDate(LocalDate entryDate) {
        this.entryDate = entryDate;
    }

    public Position getPosition() {return position;}

    public void setPosition(Position position) {this.position = position;}

    public int getSalary() {return getPosition().getSalary();}

    public void setSalary(int salary) {}

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Employee employee = (Employee) o;
        return Objects.equals(ID, employee.ID) && Objects.equals(firstName, employee.firstName) && Objects.equals(lastName, employee.lastName) && Objects.equals(mail, employee.mail) && Objects.equals(entryDate, employee.entryDate) && Objects.equals(position, employee.position);
    }

    @Override
    public int hashCode() {
        return Objects.hash(ID, firstName, lastName, mail, entryDate, position);
    }
}


//tätigkeit


//uralubstage restlich (nächster urlaub)
//überstunden

//oragnigram / führunkskraft
// teams (gleicher boss != gleiches team)

// filter + suchfunktionen


