package com.company.employee_manager.model.employee;

public enum Position {
    SENIOR(3700),
    JUNIOR(2700);


    public int salary;

    Position(int salary) {
        this.salary = salary;
    }

    public int getSalary() {
        return salary;
    }

    public void setSalary(int salary) {
        this.salary = salary;
    }
}
