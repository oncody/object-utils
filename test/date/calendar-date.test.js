import {CalendarDate} from "../../src/date/calendar-date.js";
import {Month} from "../../src/date/data/month.js";

test('calendar date year', () => {
    let calendarDate = CalendarDate.simpleDate(Month.JANUARY, 8, 1990);
    expect(calendarDate.year()).toBe(1990);
});

test('calendar date month', () => {
    let calendarDate = CalendarDate.simpleDate(Month.JANUARY, 8, 1990);
    expect(calendarDate.month()).toBe(Month.JANUARY);
});

test('calendar date day', () => {
    let calendarDate = CalendarDate.simpleDate(Month.JANUARY, 8, 1990);
    expect(calendarDate.day()).toBe(8);
});

test('basic unix timestamp', () => {
    let calendarDate = CalendarDate.simpleDate(Month.JANUARY, 1, 1970);
    expect(calendarDate.unix()).toBe(0);
});

test('unix timestamp', () => {
    let calendarDate = CalendarDate.simpleDate(Month.JANUARY, 2, 1970);
    expect(calendarDate.unix()).toBe(86400000);
});

test('from unix', () => {
    let calendarDate = CalendarDate.fromUnix(0);
    expect(calendarDate.year()).toBe(1970);
    expect(calendarDate.month()).toBe(Month.JANUARY);
    expect(calendarDate.day()).toBe(1);
});
