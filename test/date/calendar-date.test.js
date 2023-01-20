import {CalendarDate} from "../../src/date/calendar-date.js";
import {Month} from "../../src/date/data/month.js";
import {DateCreator} from "../../src/date/date-creator.js";

test('calendar date year', () => {
    let calendarDate = DateCreator.date(Month.JANUARY, 8, 1990);
    expect(calendarDate.year()).toBe(1990);
});

test('calendar date month', () => {
    let calendarDate = DateCreator.date(Month.JANUARY, 8, 1990);
    expect(calendarDate.month()).toBe(Month.JANUARY);
});

test('calendar date day', () => {
    let calendarDate = DateCreator.date(Month.JANUARY, 8, 1990);
    expect(calendarDate.day()).toBe(8);
});

test('basic unix ms display', () => {
    let calendarDate = DateCreator.date(Month.JANUARY, 1, 1970);
    expect(calendarDate.unixMs()).toBe(0);
});

test('unix ms display', () => {
    let calendarDate = DateCreator.date(Month.JANUARY, 2, 1970);
    expect(calendarDate.unixMs()).toBe(86400000);
});

test('basic unix seconds display', () => {
    let calendarDate = DateCreator.date(Month.JANUARY, 1, 1970);
    expect(calendarDate.unixSeconds()).toBe(0);
});

test('unix seconds display', () => {
    let calendarDate = DateCreator.date(Month.JANUARY, 2, 1970);
    expect(calendarDate.unixSeconds()).toBe(86400);
});

test('from unix ms', () => {
    let calendarDate = DateCreator.unixMs(0);
    expect(calendarDate.year()).toBe(1970);
    expect(calendarDate.month()).toBe(Month.JANUARY);
    expect(calendarDate.day()).toBe(1);
});

test('from unix seconds', () => {
    let calendarDate = DateCreator.unixSeconds(0);
    expect(calendarDate.year()).toBe(1970);
    expect(calendarDate.month()).toBe(Month.JANUARY);
    expect(calendarDate.day()).toBe(1);
});

test('short human string', () => {
    let calendarDate = DateCreator.date(Month.JANUARY, 8, 1990);
    expect(calendarDate.shortHumanString()).toBe('Jan 8, 1990');
});

test('long human string', () => {
    let calendarDate = DateCreator.date(Month.JANUARY, 8, 1990);
    expect(calendarDate.longHumanString()).toBe('January 8, 1990');
});

test('computer string', () => {
    let calendarDate = DateCreator.date(Month.JANUARY, 8, 1990);
    expect(calendarDate.computerString()).toBe('1990-01-08');
});
