import {Numbers} from "../src/object/numbers.js";

test('test numbers from string basic', () => {
    expect(Numbers.fromString('3')).toBe(3);
});

test('test numbers from string with comma', () => {
    expect(Numbers.fromString('1,234')).toBe(1234);
});

test('test numbers from string with two commas', () => {
    expect(Numbers.fromString('1,234,567')).toBe(1234567);
});

test('test numbers round float', () => {
    expect(Numbers.roundFloat(3.14159, 2)).toBe('3.14');
});

test('test numbers round float', () => {
    expect(Numbers.roundFloat(3.14159, 3)).toBe('3.142');
});

test('test numbers round float', () => {
    expect(Numbers.roundFloat(3.1, 2)).toBe('3.10');
});

test('test random int exclusive', () => {
    expect(Numbers.randomIntegerExclusive(1, 2)).toBe(1);
});

test('test random int exclusive', () => {
    expect(Numbers.randomIntegerInclusive(1, 1)).toBe(1);
});
