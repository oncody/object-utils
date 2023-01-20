import {CalendarDate} from "../../src/date/calendar-date.js";
import {Month} from "../../src/date/data/month.js";

test('calendar date year', () => {
    let calendarDate = CalendarDate.simpleDate(Month.JANUARY, 8, 1990);
    expect(calendarDate.year()).toBe(1990);
});

test('calendar date month', () => {
    let calendarDate = CalendarDate.simpleDate(Month.JANUARY, 8, 1990);
    expect(calendarDate.year()).toBe(1990);
});
