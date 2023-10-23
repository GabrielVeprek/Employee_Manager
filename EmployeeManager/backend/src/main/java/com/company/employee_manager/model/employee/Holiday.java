package com.company.employee_manager.model.employee;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.time.LocalDate;
import java.util.Objects;
import java.util.UUID;

@Entity
public class Holiday {
    @Id
    @GeneratedValue
    private UUID ID;

    private int amount;

    private LocalDate nextHoliday;

    public Holiday(int amount, LocalDate nextHoliday) {
        this.amount = amount;
        this.nextHoliday = nextHoliday;
    }

    public Holiday() {
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public LocalDate getNextHoliday() {
        return nextHoliday;
    }

    public void setNextHoliday(LocalDate nextHoliday) {
        this.nextHoliday = nextHoliday;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Holiday holiday = (Holiday) o;
        return amount == holiday.amount && Objects.equals(nextHoliday, holiday.nextHoliday);
    }

    @Override
    public int hashCode() {
        return Objects.hash(amount, nextHoliday);
    }
}
