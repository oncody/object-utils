import {Month} from "../../../src/date/data/month.js";

test('zero based index', () => {
    expect(Month.JANUARY.zeroBasedIndex()).toBe(0);
});

test('one based index', () => {
    expect(Month.JANUARY.oneBasedIndex()).toBe(1);
});

test('january from zero based index', () => {
    expect(Month.fromZeroBasedIndex(0)).toBe(Month.JANUARY);
});

test('january from one based index', () => {
    expect(Month.fromOneBasedIndex(1)).toBe(Month.JANUARY);
});

test('december from zero based index', () => {
    expect(Month.fromZeroBasedIndex(11)).toBe(Month.DECEMBER);
});

test('december from one based index', () => {
    expect(Month.fromOneBasedIndex(12)).toBe(Month.DECEMBER);
});
