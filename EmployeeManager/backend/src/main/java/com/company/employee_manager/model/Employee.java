package com.company.employee_manager.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

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



    //position
    //tätigkeit
    //gehalt
    //uralubstage restlich (nächster urlaub)
    //überstunden

    //oragnigram / führunkskraft
    // teams (gleicher boss != gleiches team)

    // filter + suchfunktionen




    public Employee(UUID ID, String firstName, String lastName, String mail, LocalDate entryDate) {
        this.ID = ID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.mail = mail;
        this.entryDate = entryDate;
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

    public Employee() {
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Employee employee = (Employee) o;
        return Objects.equals(ID, employee.ID) && Objects.equals(firstName, employee.firstName) && Objects.equals(lastName, employee.lastName) && Objects.equals(mail, employee.mail) && Objects.equals(entryDate, employee.entryDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(ID, firstName, lastName, mail, entryDate);
    }
}
