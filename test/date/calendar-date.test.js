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

test('add days 1', () => {
    let calendarDate = DateCreator.date(Month.JANUARY, 8, 1990);
    calendarDate = calendarDate.addDays(1);
    expect(calendarDate.month()).toBe(Month.JANUARY);
    expect(calendarDate.day()).toBe(9);
    expect(calendarDate.year()).toBe(1990);
});

test('add days 7 beyond month', () => {
    let calendarDate = DateCreator.date(Month.JANUARY, 31, 1990);
    calendarDate = calendarDate.addDays(7);
    expect(calendarDate.month()).toBe(Month.FEBRUARY);
    expect(calendarDate.day()).toBe(7);
    expect(calendarDate.year()).toBe(1990);
});

test('add 1 month', () => {
    let calendarDate = DateCreator.date(Month.JANUARY, 8, 1990);
    calendarDate = calendarDate.addMonths(1);
    expect(calendarDate.month()).toBe(Month.FEBRUARY);
    expect(calendarDate.day()).toBe(8);
    expect(calendarDate.year()).toBe(1990);
});

test('add 3 months on year border', () => {
    let calendarDate = DateCreator.date(Month.DECEMBER, 1, 1990);
    calendarDate = calendarDate.addMonths(3);
    expect(calendarDate.month()).toBe(Month.MARCH);
    expect(calendarDate.day()).toBe(1);
    expect(calendarDate.year()).toBe(1991);
});

test('add 1 year', () => {
    let calendarDate = DateCreator.date(Month.DECEMBER, 1, 1990);
    calendarDate = calendarDate.addYears(1);
    expect(calendarDate.month()).toBe(Month.DECEMBER);
    expect(calendarDate.day()).toBe(1);
    expect(calendarDate.year()).toBe(1991);
});

test('add 3 years', () => {
    let calendarDate = DateCreator.date(Month.DECEMBER, 1, 1990);
    calendarDate = calendarDate.addYears(3);
    expect(calendarDate.month()).toBe(Month.DECEMBER);
    expect(calendarDate.day()).toBe(1);
    expect(calendarDate.year()).toBe(1993);
});

test('subtract 1 day', () => {
    let calendarDate = DateCreator.date(Month.JANUARY, 8, 1990);
    calendarDate = calendarDate.subtractDays(1);
    expect(calendarDate.month()).toBe(Month.JANUARY);
    expect(calendarDate.day()).toBe(7);
    expect(calendarDate.year()).toBe(1990);
});

test('subtract 3 days across month', () => {
    let calendarDate = DateCreator.date(Month.FEBRUARY, 1, 1990);
    calendarDate = calendarDate.subtractDays(3);
    expect(calendarDate.month()).toBe(Month.JANUARY);
    expect(calendarDate.day()).toBe(29);
    expect(calendarDate.year()).toBe(1990);
});

test('subtract 1 month', () => {
    let calendarDate = DateCreator.date(Month.FEBRUARY, 1, 1990);
    calendarDate = calendarDate.subtractMonths(1);
    expect(calendarDate.month()).toBe(Month.JANUARY);
    expect(calendarDate.day()).toBe(1);
    expect(calendarDate.year()).toBe(1990);
});

test('subtract 3 months across year', () => {
    let calendarDate = DateCreator.date(Month.JANUARY, 1, 1990);
    calendarDate = calendarDate.subtractMonths(3);
    expect(calendarDate.month()).toBe(Month.OCTOBER);
    expect(calendarDate.day()).toBe(1);
    expect(calendarDate.year()).toBe(1989);
});

test('subtract 1 year', () => {
    let calendarDate = DateCreator.date(Month.JANUARY, 1, 1990);
    calendarDate = calendarDate.subtractYears(1);
    expect(calendarDate.month()).toBe(Month.JANUARY);
    expect(calendarDate.day()).toBe(1);
    expect(calendarDate.year()).toBe(1989);
});

test('subtract 3 years', () => {
    let calendarDate = DateCreator.date(Month.JANUARY, 1, 1990);
    calendarDate = calendarDate.subtractYears(3);
    expect(calendarDate.month()).toBe(Month.JANUARY);
    expect(calendarDate.day()).toBe(1);
    expect(calendarDate.year()).toBe(1987);
});

test('difference in days negative', () => {
    let first = DateCreator.date(Month.JANUARY, 1, 1990);
    let second = DateCreator.date(Month.JANUARY, 2, 1990);
    let diff = first.differenceInDays(second);
    expect(diff).toBe(-1);
});

test('difference in days positive', () => {
    let first = DateCreator.date(Month.JANUARY, 2, 1990);
    let second = DateCreator.date(Month.JANUARY, 1, 1990);
    let diff = first.differenceInDays(second);
    expect(diff).toBe(1);
});

test('difference in days positive 4', () => {
    let first = DateCreator.date(Month.JANUARY, 5, 1990);
    let second = DateCreator.date(Month.JANUARY, 1, 1990);
    let diff = first.differenceInDays(second);
    expect(diff).toBe(4);
});

test('difference in days across month', () => {
    let first = DateCreator.date(Month.FEBRUARY, 1, 1990);
    let second = DateCreator.date(Month.JANUARY, 31, 1990);
    let diff = first.differenceInDays(second);
    expect(diff).toBe(1);
});

test('difference in months positive 1', () => {
    let first = DateCreator.date(Month.FEBRUARY, 1, 1990);
    let second = DateCreator.date(Month.JANUARY, 1, 1990);
    let diff = first.differenceInMonths(second);
    expect(diff).toBe(1);
});

test('difference in months negative 1', () => {
    let first = DateCreator.date(Month.JANUARY, 1, 1990);
    let second = DateCreator.date(Month.FEBRUARY, 1, 1990);
    let diff = first.differenceInMonths(second);
    expect(diff).toBe(-1);
});

test('difference in months across year', () => {
    let first = DateCreator.date(Month.JANUARY, 1, 1990);
    let second = DateCreator.date(Month.OCTOBER, 1, 1989);
    let diff = first.differenceInMonths(second);
    expect(diff).toBe(3);
});

test('difference in years positive 1', () => {
    let first = DateCreator.date(Month.JANUARY, 1, 1990);
    let second = DateCreator.date(Month.JANUARY, 1, 1989);
    let diff = first.differenceInYears(second);
    expect(diff).toBe(1);
});

test('difference in years negative 1', () => {
    let first = DateCreator.date(Month.JANUARY, 1, 1989);
    let second = DateCreator.date(Month.JANUARY, 1, 1990);
    let diff = first.differenceInYears(second);
    expect(diff).toBe(-1);
});

test('difference in years positive 5', () => {
    let first = DateCreator.date(Month.JANUARY, 1, 1990);
    let second = DateCreator.date(Month.JANUARY, 1, 1985);
    let diff = first.differenceInYears(second);
    expect(diff).toBe(5);
});
