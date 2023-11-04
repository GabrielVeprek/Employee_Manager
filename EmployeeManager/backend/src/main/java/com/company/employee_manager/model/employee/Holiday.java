package com.company.employee_manager.model.employee;

import java.time.LocalDate;
import java.util.Objects;


public class Holiday {

    private int holidayAmount;

    private LocalDate nextHoliday;

    public Holiday(int holidayAmount, LocalDate nextHoliday) {
        this.holidayAmount = holidayAmount;
        this.nextHoliday = nextHoliday;
    }

    public Holiday() {
    }

    public int getHolidayAmount() {
        return holidayAmount;
    }

    public void setHolidayAmount(int holidayAmount) {
        this.holidayAmount = holidayAmount;
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
        return holidayAmount == holiday.holidayAmount && Objects.equals(nextHoliday, holiday.nextHoliday);
    }

    @Override
    public int hashCode() {
        return Objects.hash(holidayAmount, nextHoliday);
    }
}
